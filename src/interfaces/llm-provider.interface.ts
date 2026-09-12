export interface LLMProviderInterface {
    generateResponse(prompt: string): Promise<string>;
    generateStream(prompt: string): Promise<AsyncIterableIterator<string>>;

    /**
     * Chuyển đổi văn bản thành mảng các con số (Vector Embedding)
     * @param text Đoạn văn bản cần chuyển đổi
     */
    embedText(text: string): Promise<number[]>;
}