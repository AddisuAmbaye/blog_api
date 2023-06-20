const mongoose = require('mongoose');

const DeadlineSchema = new mongoose.Schema({
  term: { type: String, required: true },
  level: { type: String, required: true },
  deadline: { type: String, required: true },
});

const ApplicationFeeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  amount: { type: String, required: true },
});

const TestPolicySchema = new mongoose.Schema({
  type: { type: String, required: true },
  details: { type: String, required: true },
});

const EvaluationsSchema = new mongoose.Schema({
  coursesAndGrades: { type: String, required: true },
  recommendations: [{ type: String, required: true }],
  teacherEvaluations: { type: String, required: true },
  other: {
    optional: { type: Number, required: true },
  },
});

const WritingRequirementsSchema = new mongoose.Schema({
  personalEssay: { type: String, required: true },
  collegeQuestions: { type: String, required: true },
  writingSupplement: { type: String, required: true },
});

const AcademicProgramSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, required: false },
  description: { type: String, required: false },
});

const ImageSchema = new mongoose.Schema({
  url: { type: String, required: true }
});

const UniversitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  links: { type: String, required: true },
  deadlines: [{ type: DeadlineSchema, required: true }],
  applicationFees: [{ type: ApplicationFeeSchema, required: true }],
  testPolicy: { type: TestPolicySchema, required: true },
  evaluations: { type: EvaluationsSchema, required: true },
  additionalInfo: { type: String, required: true },
  writingRequirements: { type: WritingRequirementsSchema, required: true },
  academicPrograms: [{ type: AcademicProgramSchema, required: true }],
  images: {
    logo: { type: ImageSchema, required: true },
    insideCampus: { type: ImageSchema, required: true },
    campusGate: { type: ImageSchema, required: true },
  },
});

const University = mongoose.model('University', UniversitySchema);

module.exports = University;