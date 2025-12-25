export class HttpClient {
  private static readonly DEFAULT_TIMEOUT = 5000
  private static readonly COMMON_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  static async request<T>(
    url: string,
    options: RequestInit,
    timeout = this.DEFAULT_TIMEOUT
  ): Promise<T> {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          ...this.COMMON_HEADERS,
        },
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        const errorBody = await response.text()
        throw new Error(`HTTP ${response.status}: ${errorBody}`)
      }

      return response.json()
    } catch (error) {
      clearTimeout(timeoutId)
      throw this.handleError(error, 'Falha na requisição HTTP')
    }
  }

  private static handleError(error: unknown, context: string): Error {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return new Error(`${context}: Timeout excedido`)
      }
      return new Error(`${context}: ${error.message}`)
    }
    return new Error(`${context}: Erro desconhecido`)
  }
}
