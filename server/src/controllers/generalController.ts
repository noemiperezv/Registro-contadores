import { Request, Response } from "express";
import validator from 'validator';
import criptjs from 'crypto-js';
import keySecret from "../keySecret";
import dao from "../dao/generalDAO";

class GeneralController {

    /**
     * @description Lista los roles disponibles
     * @param req 
     * @param res 
     * @returns Promise<Response<any, Record<string, any>> | undefined>
     */

}
export const generalController = new GeneralController();