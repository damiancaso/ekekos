export class GenericFilterRequest {
    numeroPagina: number=0;
    cantidad: number=0;
    filtros: ItemFilter[]=[];
}

export class ItemFilter {
    name: string="";
    value: string="";
}