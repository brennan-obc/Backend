const svgConverter = require("../utils/svgConverter");

exports.saveSignature = async (req, res) => {
  try {
    const signatureData = req.body;

    // convert signature to SVG
    const svgData = svgConverter.convertToSvg(signatureData);

    // ToDo: save data to file/DB

    // respond to client
    res.json({
      success: true,
      message: "Signature saved successfully",
      svgData,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
