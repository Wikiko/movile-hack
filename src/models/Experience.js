const mockDbExample = require('./mockDbExample');

//Mock findAll in database...
const findAll = async () => await mockDbExample;

const find = async id => {
    const result = await mockDbExample;
    return result.find(experience => experience.id === id);
}

module.exports = {
    findAll,
    find
};