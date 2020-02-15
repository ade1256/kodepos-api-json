const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ProvinceSchema = new mongoose.Schema(
  {
    province_code: {
      type: String,
      required: true
    },
    province_name: {
      type: String,
      required: true
    },
    province_name_en: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
ProvinceSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Province', ProvinceSchema)
