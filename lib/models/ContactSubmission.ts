import mongoose, { Document, Schema } from 'mongoose';

export interface IContactSubmission extends Document {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
  gdprConsent: boolean;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  source?: string;
  userAgent?: string;
  ip?: string;
  notes?: string;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSubmissionSchema = new Schema<IContactSubmission>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String },
    service: { type: String, required: true },
    message: { type: String, required: true },
    gdprConsent: { type: Boolean, required: true },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'converted', 'lost'],
      default: 'new',
    },
    source: { type: String, default: 'website' },
    userAgent: { type: String },
    ip: { type: String },
    notes: { type: String },
    assignedTo: { type: String },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
ContactSubmissionSchema.index({ createdAt: -1 });
ContactSubmissionSchema.index({ status: 1 });
ContactSubmissionSchema.index({ email: 1 });
ContactSubmissionSchema.index({ service: 1 });

export const ContactSubmission =
  mongoose.models.ContactSubmission ||
  mongoose.model<IContactSubmission>('ContactSubmission', ContactSubmissionSchema);
