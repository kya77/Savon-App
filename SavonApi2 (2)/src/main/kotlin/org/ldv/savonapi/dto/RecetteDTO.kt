package org.ldv.savonapi.dto

import org.ldv.savonapi.model.entity.LigneIngredient

 class RecetteDTO(
    var id: Int? = null,
    var titre: String = "",
    var description: String = "",
    var surgraissage: Int = 0,
    var avecSoude: Boolean = false,
    var concentrationAlcalin: Int = 0,
    var qteAlcalin: Int = 0,
    var ligneIngredients: List<LigneIngredient> = emptyList()
)
