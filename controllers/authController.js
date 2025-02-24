const supabase = require("../config/db");
const { hashPassword, comparePassword, generateToken } = require("../services/authService");

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ error: "Email and password are required." });

  try {
    // Hash the password
    const password_hash = await hashPassword(password);

    // Insert into Supabase
    const { data, error } = await supabase
      .from("users")
      .insert([{ email, password_hash }])
      .select("id, email");

    if (error) throw error;

    res.status(201).json({ message: "User registered successfully!", user: data[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ error: "Email and password are required." });

  try {
    // Get user from Supabase
    const { data, error } = await supabase
      .from("users")
      .select("id, email, password_hash")
      .eq("email", email)
      .single();

    if (error || !data) return res.status(401).json({ error: "Invalid email or password." });

    // Compare password
    const isMatch = await comparePassword(password, data.password_hash);
    if (!isMatch) return res.status(401).json({ error: "Invalid email or password." });

    // Generate JWT token
    const token = generateToken(data.id);

    res.status(200).json({ message: "Login successful!", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
