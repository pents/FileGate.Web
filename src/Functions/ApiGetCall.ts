interface HttpResponse<T> extends Response {
    parsedBody?: T;
    error?: string;
  }

export async function ApiGetCall<T>(request: RequestInfo): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(
      request
    );
  
    try {
      // may error if there is no body
      response.parsedBody = await response.json();
    } catch (ex) {
        response.error = "Error occured while parsing JSON: " + response.statusText
    }
    return response;
  }
