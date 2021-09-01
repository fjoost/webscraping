{
    "Paginass":{
    "selector": "li.andes-pagination__page-count",
        "type": "text"
},
    "items": {
    "multi": true,
        "selector": "li.ui-search-layout__item",
        "type": "object",
        "children": {
        "tipo_propiedad": {
            "selector": "span.ui-search-item__group__element.ui-search-item__subtitle",
                "type": "text"
        },
        "ubicacion": {
            "selector": "p.ui-search-item__group__element.ui-search-item__location",
                "type": "text"
        },
        "es_proyecto": {
            "selector": "span.ui-search-styled-label.ui-search-item__highlight-label__text",
                "type": "text"
        },
        "moneda": {
            "selector": "span.price-tag-symbol",
                "type": "text"
        },
        "valor": {
            "selector": "span.price-tag-fraction",
                "type": "text"
        },
        "m2_utiles": {
            "selector": "li.ui-search-card-attributes__attribute:nth-child(1)",
                "type": "text"
        },
        "dormitorios": {
            "selector": "li.ui-search-card-attributes__attribute:nth-child(2)",
                "type": "text"
        },
        "baños": {
            "selector": "li.ui-search-card-attributes__attribute:nth-child(3)",
                "type": "text"
        },
        "nombre_proyecto": {
            "selector": "p.ui-search-item__group__element.ui-search-item__information:nth-child(2)",
                "type": "text"
        },
        "tienda_oficial": {
            "selector": "p.ui-search-official-store-label.official-store--pi.ui-search-color--GRAY",
                "type": "text"
        },
        "nombre_publicacion": {
            "selector": "p.ui-search-item__group__element.ui-search-item__information:nth-child(3)",
                "type": "text"
        },
        "url": {
            "selector": "a.ui-search-result__image.ui-search-link",
                "type": "link"
        }
    ,
        "urlImg": {
            "selector": "a.ui-search-result__image.ui-search-link",
                "type": "link"
        }
    }
}
}