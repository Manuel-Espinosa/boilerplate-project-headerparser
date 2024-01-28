exports.whoAmI = (req, res) => {
    const ipaddress = req.ip || req.connection.remoteAddress;
    const language = req.headers["accept-language"];
    const software = req.headers["user-agent"];

    res.json({
        ipaddress,
        language,
        software
    });
};
