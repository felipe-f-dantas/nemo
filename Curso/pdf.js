const doc = new jsPDF();

function gerarArquivo(){
    doc.text("Arquivo PDf gerado com sucesso!", 10, 10);

    doc.save("arquivo01.pdf");

}