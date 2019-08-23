import { createLogger, format, transports } from "winston";

const logger = createLogger({
	level: "info",
	format: format.combine(
		format.errors({ stack: true }),
		format.splat(),
		format.json(),
		format.timestamp({
			format: "YYYY-MM-DD HH:mm:ss"
		})
	),
	defaultMeta: { service: "ubuy" },
	transports: [
		new transports.Console({
			format: format.combine(format.colorize(), format.simple())
		})
	]
});

export default logger;
