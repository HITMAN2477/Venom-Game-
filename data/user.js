const schema = mongoose.Schema({
  userID: String,
 
  name: { type: String },
  bg: {
    type: String,
    default:
      "https://media.discordapp.net/attachments/876986006023315496/894710731147190342/574.png"
  },
  info: { type: String },

  birthdate: { type: Number }, // Birthdate of the user (the timestamp)
  money: { type: Number, default: 0 },
  time: { type: Number, default: 0 },
  lover: { type: String }, // The person with whom the user is in a relationship
  time1: { type: Number, default: 0 },
  levels: { type: Number, default: 1 },
  xp: { type: Number, default: 1 },
  achievements: {
    type: Object,
    default: {
      married: {
        achieved: false,
        progress: {
          now: 0,
          total: 1
        }
      }
    }
  },

  data: {
    tips: {
      given: { type: Number, default: 0 },
      received: { type: Number, default: 0 },
      timestamp: { type: Number, default: 0 }
    },

    global_xp: { type: Number, default: 0 },
    xp: { type: Array, default: [] },
    inventory: { type: Array, default: [] },

    global_level: { type: Number, default: 1 }
  },

  attch: {
    pattern: { type: String, default: null },
    emblem: { type: String, default: null },
    color: { type: String, default: "#FF0F00" },
    background: { type: String, default: null },
    hat: { type: String, default: null },
    wreath: { type: String, default: null }
  }
});
module.exports = mongoose.model("User", schema);
