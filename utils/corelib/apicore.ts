import { request} from "@playwright/test";
import * as fs from 'fs';
import * as path from 'path';


export enum Method{
    GET,
    POST,
    DELETE
}

export default class ApiCore{

private headers: Map<string, string>;
private baseUrl: string;
private resourcePath: string="";
private requestBody: any = {};
private method: Method = Method.GET;

constructor()
{
this.headers=new Map<string,string>();
this.baseUrl="";
this.requestBody={};
this.resourcePath="";
}

setMethod(method: Method)
{
    this.method=method;
    return this;
}

setBaseUrl(baseUrl: string)
{
    this.baseUrl=baseUrl;
    return this;
}

setResourcePath(resourcePath: string)
{
    this.resourcePath=resourcePath;
    return this;
}

setHeaders(headersmap: Map<string,string>)
{
    this.headers=headersmap;
    return this;
}

setPayLoad(data: JSON)
{
    this.requestBody=data;
    return this;
}

loadJsonPayload(filepath: string): any {
  const absolutePath = path.resolve(filepath);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(fileContent);
}

async sendAPIrequest(){

    try{

        const hr = Object.entries(this.headers);
        const options: object = {
            baseURL: this.baseUrl+this.resourcePath,
            headers: hr,
            data: this.requestBody,
            ignoreHTTPErrors: true,
        }

        const requestUrl = this.resourcePath
        ? this.baseUrl.concat(this.resourcePath)
        : this.baseUrl;

        const apiContext = await request.newContext();
        //get method
        if(this.method== Method.GET)
        {
            const optionsGet: object = {
                baseURL: this.baseUrl+this.resourcePath,
                headers: hr        
            }
            console.log(optionsGet);
            const responseGet = await apiContext.get(requestUrl,optionsGet);
            return responseGet;
        }
        //for post method
        else if(this.method==Method.POST)
        {
            const optionsPost: object = {
                baseURL: this.baseUrl+this.resourcePath,
                data: this.requestBody,
                headers: hr
        }
            console.log(optionsPost);
            const responsePost = await apiContext.post(requestUrl,optionsPost);
            return responsePost;
        }        
        //for delete method
        else if(this.method==Method.DELETE)
        {
            const optionsDel: object = {
                baseURL: this.baseUrl+this.resourcePath,
                headers: hr
        }
            console.log(optionsDel);
            const responseDel = await apiContext.delete(requestUrl,optionsDel);
            return responseDel;
        }        

    }
    catch(error)
    {
        if(error instanceof Error)
        {
            console.log("Unable to proceed with given API Request - "+error.message);
        }
    }


}
}