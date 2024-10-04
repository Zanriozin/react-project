const mockResponse = {
    data: [
        {
            name: "John",
            age: 23,
            state: "Panama"
        }
    ]
}

export default{
    get: jest.fn().mockResolvedValue(mockResponse)
}