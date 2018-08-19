const express = require('express');
const Experience = require('../models/Experience');
const City = require('../models/City');
const router = express.Router();
const { groupBy } = require('ramda');

const catchErrorDefault = (error, res) => {
    console.error(error);
    res.status(400).json({
        error: 'Sorry, an error occurred'
    });
};

const groupByCities = (experiences, cities) => {
    const groupedByCityId = groupBy(experience => experience.city.id, experiences);
    return Object.keys(groupedByCityId)
        .map(key => {
            return {
                city: cities.find(item => item.id === parseInt(key)),
                items: experiences.filter(e => e.city.id === parseInt(key))
            };
        });
}

router.get('/experiences', async (req, res) => {
    try {
        const result = await Experience.findAll();
        res.send(result);
    } catch (error) {
        catchErrorDefault(error, res);
    }
});

router.get('/experiences/:id', async (req, res) => {
    try {
        const result = await Experience.find(parseInt(req.params.id));
        if (result) {
            return res.json(result);
        }
        return res.status(404).json({
            error: 'Experience not found'
        });
    } catch (error) {
        catchErrorDefault(error, res);
    }
});

router.get('/home', async (req, res) => {
    try {
        const experiences = await Experience.findAll();
        const categories = experiences.map(experience => experience.category);
        const highlights = experiences.sort((experienceA, experienceB) => {
            if (experienceA.recorrence > experienceB.recorrence) {
                return -1;
            }
            if (experienceA.recorrence < experienceB.recorrence) {
                return 1;
            }
            return 0
        }).slice(0, 2);
        const cities = await City.findAll();
        const citiesGrouped = groupByCities(experiences, cities);
        res.json({
            main: categories,
            highlights,
            cities: citiesGrouped
        });
    } catch (error) {
        catchErrorDefault(error, res);
    }
});

module.exports = router;