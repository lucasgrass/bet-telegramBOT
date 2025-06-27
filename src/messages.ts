const messages = {
    commandNotExists: `
    ❌ Comando inválido. 🛠️ Comandos válidos:
    \n /anotar <sua anotação>`,
    noteConfirmed: (text: string) =>`✅ Anotação realizada! "${text}"`,
    error: "Um erro ocorreu durante o processo. Tente novamente!",
    notTextMessageError: "Por favor, envie um comando de texto.",
    permissionError: '⛔ Você não tem permissão para usar este bot.'
}

export default messages