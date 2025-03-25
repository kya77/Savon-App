package org.ldv.savonapi.controller

import org.ldv.savonapi.model.dao.IngredientDAO
import org.ldv.savonapi.model.entity.Ingredient
import org.ldv.savonapi.service.SimulateurService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin
@RequestMapping("/api-savon/v1/ingredient")
class IngredientController (val ingredientDAO: IngredientDAO){

    @GetMapping
    fun index(): List<Ingredient> {
        return this.ingredientDAO.findAll()
    }

    @GetMapping("/{id}")
    fun show(@PathVariable id: Long): ResponseEntity<Ingredient> {
        val ingredient = ingredientDAO.findById(id)
        return if (ingredient.isPresent) {
            ResponseEntity.ok(ingredient.get())
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @PostMapping
    fun store(@RequestBody ingredient: Ingredient): ResponseEntity<Ingredient> {
        val savedIngredient = ingredientDAO.save(ingredient)
        return ResponseEntity.status(HttpStatus.CREATED).body(savedIngredient)
    }

    @PutMapping("/{id}")
    fun store(
        @PathVariable id: Long,
        @RequestBody updatedIngredient: Ingredient
    ): ResponseEntity<Ingredient> {
        return ingredientDAO.findById(id).map { existingIngredient ->
            existingIngredient.nom = updatedIngredient.nom
            existingIngredient.iode = updatedIngredient.iode
            existingIngredient.ins = updatedIngredient.ins
            existingIngredient.sapo = updatedIngredient.sapo
            existingIngredient.volMousse = updatedIngredient.volMousse
            existingIngredient.tenueMousse = updatedIngredient.tenueMousse
            existingIngredient.douceur = updatedIngredient.douceur
            existingIngredient.lavant = updatedIngredient.lavant
            existingIngredient.durete = updatedIngredient.durete
            existingIngredient.solubilite = updatedIngredient.solubilite
            existingIngredient.sechage = updatedIngredient.sechage
            existingIngredient.estCorpsGras = updatedIngredient.estCorpsGras
            ResponseEntity.ok(ingredientDAO.save(existingIngredient))
        }.orElse(ResponseEntity.notFound().build())
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long): ResponseEntity<Void> {
        return if (ingredientDAO.existsById(id)) {
            ingredientDAO.deleteById(id)
            ResponseEntity.noContent().build()
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @DeleteMapping("/all")
    fun deleteAll(): ResponseEntity<Void> {
        ingredientDAO.deleteAll()
        return ResponseEntity.noContent().build()
    }
}