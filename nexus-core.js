/* NEXUS CORE
   Первая основа системы.
   Здесь пока нет подключения к ИИ.
*/

const NEXUSCore = (() => {
  const world = {
    time: 0,
    location: null,
    characters: {},
    events: [],
    relationships: {},
    memories: []
  };

  // Добавление персонажа
  function addCharacter(id, data) {
    world.characters[id] = {
      name: data.name || "Unknown",
      personality: data.personality || "",
      goals: data.goals || [],
      emotions: {},
      relationships: {}
    };
  }

  // Запись события в историю мира
  function addEvent(description, importance = 1) {
    const event = {
      description,
      importance,
      time: world.time,
      createdAt: new Date().toISOString()
    };

    world.events.push(event);
    return event;
  }

  // Сохранение воспоминания
  function remember(characterId, memory, importance = 1) {
    world.memories.push({
      characterId,
      memory,
      importance,
      time: world.time
    });
  }

  // Получение истории персонажа
  function getMemories(characterId) {
    return world.memories.filter(
      item => item.characterId === characterId
    );
  }

  // Получение текущего состояния мира
  function getWorld() {
    return JSON.parse(JSON.stringify(world));
  }

  return {
    addCharacter,
    addEvent,
    remember,
    getMemories,
    getWorld
  };
})();

window.NEXUSCore = NEXUSCore;
