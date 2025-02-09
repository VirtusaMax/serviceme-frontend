// components/TeamMemberDialog.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Mail, Phone } from "lucide-react"; // Icons for email & phone

interface TeamMember {
  name: string;
  position: string;
  image?: string;
  bio?: string;
  email?: string;
  phone?: string;
}

interface TeamMemberDialogProps {
  member: TeamMember | null;
  onClose: () => void;
}

const TeamMemberDialog: React.FC<TeamMemberDialogProps> = ({ member, onClose }) => {
  if (!member) return null; // Prevent rendering if no member is selected

  return (
    <Dialog open={!!member} onOpenChange={onClose}>
      <DialogContent className="bg-custom-blue  max-w-lg mx-auto rounded-xl shadow-lg p-6 border-2 border-custom-yellow">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-custom-yellow">{member.name}</DialogTitle>
          <DialogDescription className="text-custom-white">{member.position}</DialogDescription>
        </DialogHeader>

        <img
          src={member.image || "https://via.placeholder.com/150"}
          alt={member.name}
          className="w-40 h-40 mx-auto object-cover rounded-full border-4 border-gray-300 shadow-md"
        />

        

        {/* Contact Details */}
        <div className="mt-6 space-y-2 text-center">
          {member.email && (
            <p className="flex items-center justify-center text-custom-yellow">
              <Mail className="w-5 h-5 mr-2 text-white" /> {member.email}
            </p>
          )}
          {member.phone && (
            <p className="flex items-center justify-center text-custom-yellow">
              <Phone className="w-5 h-5 mr-2 text-white" /> {member.phone}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberDialog;
