const connection = require('../db/db.js')

const createProposal = async proposal => {

    let db = await connection()
    let proposalRepository = db.getRepository("Proposal");
        proposalRepository.save(proposal)
            .then( savedProposal  => {

                console.log("Proposal has been saved: ", savedProposal);
                return proposalRepository.find();

            })
            .then( allPosts => {
                console.log("All posts: ", allPosts);
            });

}

createProposal({
    name: "Cloud Proposal"
})