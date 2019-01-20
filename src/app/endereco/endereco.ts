export class Endereco {

    id: number;
    dsLogradouro: String;
    nrLogradouro: String;
    municipio: Municipio;
    uf: Uf;
}

class Municipio {
    dsMunicipio: String;
    coCep: number;
}

class Uf {
    dsUf: String;
    dsSigla: String;
}