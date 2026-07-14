import userModel from "../models/userModels.js";


export const getUserData= async (req,res)=>{
    try {
        const userId=req.userId;
        const user =await userModel.findById(userId);
        // console.log("User ID:", userId) to check...
        if (!user){
            return res.json({success:false,message:"User not Found >_<..."})
        }
        res.json ({
            success:true,
            userData:{
                name:user.name,
                isAccountVerified:user.isAccountVerified
            }

            
        });

    } catch (error) {
        res.json({success:false,message:error.message})
    }
}