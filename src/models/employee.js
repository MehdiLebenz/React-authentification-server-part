import  mongoose  from 'mongoose';

const EmployeeSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    projet: String,
    position: String
});

export default mongoose.model('Employee', EmployeeSchema);