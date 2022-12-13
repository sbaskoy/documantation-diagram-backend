class ApiError {
    status: number = 400;
    message: string;
    constructor(_message?: string, _status?: number,) {
        this.status = _status ?? 400;
        this.message = _message ?? "Internal server error";
    }
}
export const handleError = (_message?: string, _status?: number,) => new ApiError(_message, _status);