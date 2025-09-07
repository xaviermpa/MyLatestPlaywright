import {Given, When,Then } from "@cucumber/cucumber";
import ApiCore, { Method } from "../../../utils/corelib/apicore";
import { expect } from "playwright/test";

//define obj for ApiCore class
const apicore = new ApiCore();
let baseURL = "";
let apiresponse: any = {};


Given(`API base url for respective env is {string}`, (baseurl: string) => {
baseURL = baseurl;
});

Given(`Provide API Endpoint along resource param is {string}`, (pathURI: string) => {
    const endpoint: string = baseURL.concat(pathURI);  
    //set endpoint  
    apicore.setBaseUrl(endpoint);
});

Given(`I need to set API Headers as {string}`, (headers: Map<string,string>) => {
    headers.set("Authorization", "Bearer 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");
    headers.set("X-GitHub-Api-Version","2022-11-28"); 
    apicore.setHeaders(headers); 
});

When(`I need to set API Method as {string}`, (method: string) => {
if(method=="GET")
{
apicore.setMethod(Method.GET);
}
else if(method=="POST")
{
apicore.setMethod(Method.POST);
}
else if(method=="DELETE")
{
apicore.setMethod(Method.DELETE);
}
});

Given(`I need to provide payload from {string}`, (payloadpath: string) => {
const payload = apicore.loadJsonPayload(payloadpath);
apicore.setPayLoad(payload);
});

Then(`I need to send my API`, () => {
apiresponse=apicore.sendAPIrequest();
});

Then(`Response has status as {string} and {string}`, (sCode: number, sText: string) => {
expect(apiresponse.status()).toBe(sCode);
expect(apiresponse.statusText()).toBe(sText);
});

