const Movie=require("../models/Movies");

exports.movie = async (req, res) => {
    try {
      // Destructure fields from the request body
      const {name, url, image, category, linkType} = req.body;

      // Check if All Details are there or not
      if (!name || !url || !image || !category || !linkType) {
        return res.status(403).send({
          success: false,
          message: "All Fields are required",
        })
      }
  
  
      const movie = await Movie.create({ name, url, image, category,linkType });
  
      return res.status(200).json({
        success: true,
        movie,
        message: "Movie create successfully",
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "Please try again.",
      })
    }
  }


  //getAllMovies
exports.getAllMovies = async (req, res) => {
    try{      
         const getAllMovies = await Movie.find({});
          return res.status(200).json({
                success:true,
                message:"All movies fetched successfully",
                data:getAllMovies,
           });
    }   
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    } 
}