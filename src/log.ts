import { appendFile } from "fs";
import { PROMPT } from "./constants";
import { pad } from "./helpers";

/**
 * General logging methods
 */
export class Log {
  /**
   * Log a message to console and to file.
   * @param {string} message
   */
  public static write(
    message: string,
  ): void {

    const date: Date = new Date();
    const formattedMessage: string = `${PROMPT} ${date.toISOString()} >> ${message}`;

    console.log(formattedMessage);

    try {
      appendFile(
        `${process.cwd()}/logs/server-log_${Log.formatDate(date)}.txt`,
        formattedMessage,
        (err: NodeJS.ErrnoException) => console.error(err),
      );
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Not implemented
   */
  public static read() { const x = null; }

  /**
   * Formats a date for log uses, usually filenames.
   * @param {Date} date - Date object
   * @param {string} delimiter - (Optional) Date string delimiter. Defaults to an en-dash ("-").
   * @returns {string}
   */
  private static formatDate(
    date: Date,
    delimiter?: string,
  ): string {

    const delim: string = delimiter || "-";
    return pad(date.getUTCFullYear()) + delim +
           pad(date.getUTCMonth())    + delim +
           pad(date.getUTCDay());
  }
}
