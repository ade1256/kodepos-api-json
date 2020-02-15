const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const PostalSchema = new mongoose.Schema(
  {
    urban: {
      type: String,
      required: true
    },
    sub_district: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    province_code: {
      type: String,
      required: true
    },
    postal_code: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
PostalSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Postal', PostalSchema)
