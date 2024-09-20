const Candidate = require("../models/candidate");
const User = require("../models/user");

// Check if user has admin role
const checkAdminRole = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user || user.role !== "admin") {
            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
    }
};
exports.createCandidate = async (req, res) => {
    try {
        const userId = req.user.id;
        const candidateData = req.body;

        if (await checkAdminRole(userId))
            return res.status(403).json({ msg: "User has no admin role" });
        const candidate = await Candidate(candidateData);
        await candidate.save();
        res.status(201).json({ msg: "Candidate created successfully", candidate });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error", error });
    }
};

exports.updateCandidates = async (req, res) => {
    try {
        const userId = req.user.id;
        const candidateId = req.params.candidate;
        if ((await checkAdminRole(userId)))
            return res.status(403).json({ msg: "User has no admin role" });
        const newCandidateData = req.body;
        const response = await Candidate.findByIdAndUpdate(
            candidateId,
            newCandidateData
        );
        if (!response) return res.status(404).json({ msg: "Candidate not found" });
        res.json({ msg: "Candidate updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error", error });
    }
};

exports.deleteCandidate = async (req, res) => {
    try {
        const userId = req.user.id;
        const candidateId = req.params.candidate;
        if ((await checkAdminRole(userId)))
            return res.status(403).json({ msg: "User has no admin role" });
        const response = await Candidate.findByIdAndDelete(candidateId);
        if (!response) return res.status(404).json({ msg: "Candidate not found" });
        res.json({ msg: "Candidate deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error", error });
    }
};

// let start the voting
exports.voteCandidates = async (req, res) => {
    try {
        const candidateId = req.params.candidate;
        const userId = req.user.id;
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ msg: "User not found" });
        if (user.role === "admin")
            return res.json({ msg: "admin voting not allowed" });
        const candidate = await Candidate.findById(candidateId);
        if (!candidate) return res.status(404).json({ msg: "Candidate not found" });
        if (user.isVoting)
            return res.status(403).json({ msg: "User has already voted" });
        candidate.votes.push({ user: userId });
        candidate.voteCount++;
        await candidate.save();
        user.isVoting = true;
        await user.save();
        res.json({ msg: "Vote casted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error", error });
    }
};

exports.voteCount = async (req, res) => {
    try {
        const candidate = await Candidate.find();
        // map the candidate only returned the name and vote count
        const voteCount = candidate.map((user) => ({
            name: user.name,
            voteCount: user.voteCount,
        }));
        res.json(voteCount);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error", error });
    }
};

// get all candidates
exports.getAllCandidates = async (req,res) => {
    try {
        const userId = req.user.id;
        if(await checkAdminRole(userId))
            return res.status(404).json('user has no admin role ?')
        const allCandidates = await Candidate.find();
        res.status(200).json(allCandidates)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error", error });        
    }
}