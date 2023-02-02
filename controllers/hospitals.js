//@desc Get all hospitals
//@route GET /api/v1/hospitals
//@access Public
exports.getHospitals = (req,res,next) =>{
    res.status(200).json({success:true,msg:'Show all hospitals'});
};

//@desc Get single hospitals
//@route GET /api/v1/hospitals/:id
//@access Public
exports.getHospital = (req,res,next) =>{
    res.status(200).json({success:true, msg: `Show hospital ${req.params.id}`});
};


//@desc Create new  hospitals
//@route POST /api/v1/hospitals
//@access Public
exports.createHospital = (req,res,next) =>{
    res.status(200).json({success:true,msg:`Create new hospitals`})
};

//@desc Update  hospitals
//@route PUT /api/v1/hospitals/:id
//@access Public
exports.updateHospital= (req,res,next) =>{
    res.status(200).json({success:true,msg:`Update hospital ${req.params.id}`})
};

//@desc Delete  hospitals
//@route DELETE /api/v1/hospitals/:id
//@access Public
exports.deleteHospital = (req,res,next) =>{
    res.status(200).json({success:true,msg:`Delete hospital ${req.params.id}`})
};