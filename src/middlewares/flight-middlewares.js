const {ClientErrorsCodes} = require('./../utils/error-codes')

const validatecreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {

    return res.status(ClientErrorsCodes.BAD_REQUEST).json({
        data:{},
        success:false,
        message:"Invalid request body for creating  flight",
        err:'Missing mandatory properties to create flight'
    })
  }

  next();
};




module.exports={
    validatecreateFlight
}