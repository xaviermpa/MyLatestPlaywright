import {test,expect} from '@playwright/test'
import ApiCore, {Method} from '../utils/corelib/apicore'

const apicore = new ApiCore();

const headers = new Map<string,string>();
headers.set("Authorization", "Bearer <token>");
headers.set("X-GitHub-Api-Version","2022-11-28"); 
const payload=apicore.loadJsonPayload("resources/data/samplepayload.json");

test("get request details sample - Verify Repo", async({request}) =>{
apicore.setBaseUrl("https://api.github.com/repos/xaviermpa/MyLatestPlaywright");
apicore.setMethod(Method.GET);
apicore.setHeaders(headers);
const resp: any = await apicore.sendAPIrequest();
expect(resp.status()).toBe(200);
expect(resp.statusText()).toBe('OK');

});

test("Post request details sample - Create Repo", async({request}) =>{
apicore.setBaseUrl("https://api.github.com/repos/xaviermpa/tobeDeleted");
apicore.setMethod(Method.POST);
apicore.setHeaders(headers);
apicore.setPayLoad(payload)
const resp: any = await apicore.sendAPIrequest();
expect(resp.status()).toBe(200);
expect(resp.statusText()).toBe('OK');


});
