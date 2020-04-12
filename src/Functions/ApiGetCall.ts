

interface HttpResponse<T> extends Response {
    parsedBody?: T;
    error?: string;
  }

export async function ApiGetCall<T>(request: RequestInfo): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(
      request
    );
      if (response.ok){
        try {
          // may error if there is no body
          response.parsedBody = await response.json();
        } catch (ex) {
            response.error = "Error occured while parsing JSON: " + response.statusText
        }
      }else{
        console.log("Error GEt list") // TODO
      }

    return response;
}

export async function ApiDownload(request: RequestInfo){
    const response = await fetch(request);

    if (response.ok){
      return response.blob();
    }else{
      console.log("Error loading file") // TODO
    }
  
}