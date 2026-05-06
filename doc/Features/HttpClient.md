# HTTP Client

The [HTTP Client APIs](https://roomos.cisco.com/xapi/search?search=httpclient) are very powerful xAPIs that lets the device make HTTP calls to external URLs. This can be useful to let macros post data such as metrics to other services, or fetch data from external sites.

Http requests can be made with the following commands: [GET](https://roomos.cisco.com/xapi/Command.HttpClient.Get/), [POST](https://roomos.cisco.com/xapi/Command.HttpClient.Post/), [PUT](https://roomos.cisco.com/xapi/Command.HttpClient.Put/), [PATCH](https://roomos.cisco.com/xapi/Command.HttpClient.Patch/), [DELETE](https://roomos.cisco.com/xapi/Command.HttpClient.Delete/). The commands are asynchronous.

For macro examples that use HTTP Client, see [Send Webex message](https://roomos.cisco.com/macros/Library%20-%20Send%20Webex%20Message) or [Weather forecast](https://roomos.cisco.com/macros/Library%20-%20Weather%20Forecast).

## How to enable

Make sure [xConfiguration HttpClient Mode](https://roomos.cisco.com/xapi/Configuration.HttpClient.Mode/) is `On`.

If you need to make calls to HTTP (non-HTTPS), or HTTPS sites with self signed certificates, you may also need to enable the following:

- [xConfiguration HttpClient AllowHTTP](https://roomos.cisco.com/xapi/Configuration.HttpClient.AllowHTTP/)
- [xConfiguration HttpClient AllowInsecureHTTPS](https://roomos.cisco.com/xapi/Configuration.HttpClient.AllowInsecureHTTPS/)

## Example: GET

```js
const response = await xapi.Command.HttpClient.Get({
  Url: "https://jsonplaceholder.typicode.com/posts/1/comments",
});

const json = JSON.parse(response);
console.log(json.Body);
```

Notice that you need to use `async/await` to wait for the response above. The result object contains `status` (typically "OK") and `StatusCode` (eg 200) that indicates whether the HTTP call was succesful.

## Example: POST

The body of a POST request should be added as multiline data (string), like this:

```js
const body = {
  name: "My post from xapi",
  email: "macro-polo@cisco.com",
};

const res = await xapi.Command.HttpClient.Post(
  { Url: "https://jsonplaceholder.typicode.com/posts" },
  JSON.stringify(body),
);

const json = JSON.parse(res);
console.log(json.status, json.StatusCode);
```

## Headers

HTTP requests often requires you to set multiple headers. In HTTP Client, this is handled with multi-argument parameter, and in JavaScript, this can simply be sent as an array.

**Note:** Each header should be a string on the format `name: value`.

Here is an example of how to send a message to the Webex app (chat), which requires two headers:

```js
const webexMsgUrl = "https://webexapis.com/v1/messages";
// Create a token on developer.webex.com:
const botToken = "....";
const email = "macro-polo@cisco.com";
const markdown = "The room contains **8** persons.";

const headers = [
  "Content-Type: application/json",
  "Authorization: Bearer " + botToken,
];

const body = { markdown, toPersonEmail: email };

const res = await xapi.Command.HttpClient.Post(
  { Header: headers, Url: webexMsgUrl },
  JSON.stringify(body),
);
```

## Error handling

Errors from the Http Client commands can be catched with normal async try/catch pattern. Notice that unlike most other HTTP clients like [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), the Http Client will also throw errors when the result is not 2xx / OK, eg when the result is 404 Not found.

```js
try {
  await xapi.Command.HttpClient.Get({
    Url: "https-XXX://jsonplaceholder.typicode.com/posts",
  });
} catch (e) {
  console.warn("not able to fetch", e);
}
// -> not able to fetch {"code":1,"message":"Invalid URL specified"}

try {
  await xapi.Command.HttpClient.Get({
    Url: "https://jsonplaceholder.typicode.com/posts-XXX",
  });
} catch (e) {
  console.warn("not able to fetch", JSON.parse(e.data)?.StatusCode);
}
// -> not able to fetch 404
```

## Limitations & max HTTP connections

Please be aware that you cannot send multiple HTTP requests at the same time, this will fail and RoomOS will not automatically re-try. This can typically happen if you are doing aggressive polling:

```js
for (let n = 0; n < 5; n++) {
  xapi.Command.HttpClient.Get({
    Url: "https://jsonplaceholder.typicode.com/posts/" + n,
  });
}
// -> `Unhandled promise rejection {"code":1,"message":"No available http connections"}`
```

Always make sure you at least `await` each HTTP call and don't send multiple within a short timeframe.

<!-- How to deal with errors

Proxy

Use to talk to other codecs

Hostname limiting

Certificates

Using http client to access local network resources from outside -->
