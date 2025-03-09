import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Manually define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Now this will work:
const logFile = path.join(__dirname, "../../logs/request.log");

//const logFile = path.join(__dirname, "../../logs/request.log");

const requestLogger = (req, res, next) => {
  const startTime = Date.now();

  // Capture request details
  const { method, url, params, query, body, headers } = req;
  const requestData = {
    method,
    url,
    params,
    query,
    body,
    headers,
    timestamp: new Date().toISOString(),
  };

  // Log request
  console.log("Incoming Request:", requestData);

  // Capture response details
  const oldSend = res.send;
  res.send = function (data) {
    const endTime = Date.now();
    const responseData = {
      status: res.statusCode,
      response: data,
      duration: `${endTime - startTime}ms`,
    };

    // Log response
    console.log("Response Sent:", responseData);

    // Save log to file
    fs.appendFileSync(
      logFile,
      JSON.stringify({ requestData, responseData }) + "\n\n"
    );

    // Send the original response
    return oldSend.apply(res, arguments);
  };

  next();
};

// Error Logger
const errorLogger = (err, req, res, next) => {
  const errorLog = {
    error: err.message,
    stack: err.stack,
    timestamp: new Date().toISOString(),
  };

  console.error("Error Occurred:", errorLog);

  fs.appendFileSync(logFile, JSON.stringify(errorLog) + "\n");

  res.status(500).json({ message: "Internal Server Error" });
};

export { requestLogger, errorLogger };
