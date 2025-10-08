// ✅ Discriminated Unions Example

type SuccessResponse = {
    status: "success"; // Discriminant property
    data: {
      userId: number;
      message: string;
    };
  };
  
  type ErrorResponse = {
    status: "error"; // Discriminant property
    errorCode: number;
    errorMessage: string;
  };
  
  type BackendResponse = SuccessResponse | ErrorResponse;
  
  function handleResponse(response: BackendResponse) {
    // TypeScript automatically narrows based on the discriminant (status)
    if (response.status === "success") {
      console.log(`✅ Success: ${response.data.message} (User ID: ${response.data.userId})`);
    } else {
      console.log(`❌ Error ${response.errorCode}: ${response.errorMessage}`);
    }
  }
  
  // Testing both cases
  const success: SuccessResponse = {
    status: "success",
    data: { userId: 101, message: "Login successful" }
  };
  
  const error: ErrorResponse = {
    status: "error",
    errorCode: 401,
    errorMessage: "Unauthorized access"
  };
  
  handleResponse(success);
  handleResponse(error);
  