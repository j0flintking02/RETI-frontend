import jsPDF from "jspdf";
import { toast } from "react-toastify";

export const handleLogout = () => {
    localStorage.removeItem('loginDetails')
    return window.location.reload();
}


// Helper function to format the date to "distance from now"
export const formatDistanceToNow = (date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) {
        return `${Math.floor(interval)} years ago`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return `${Math.floor(interval)} months ago`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return `${Math.floor(interval)} days ago`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return `${Math.floor(interval)} hours ago`;
    }
    interval = seconds / 60;
    if (interval > 1) {
        return `${Math.floor(interval)} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
};

export const loginDetails = () => {
    return JSON.parse(localStorage.getItem('loginDetails'));
}

export const userDetails = () => {
    return JSON.parse(localStorage.getItem('userDetails'));
}

export const getAccessToken = () => {
    const details = loginDetails();
    return details?.access_token;
}

export const getRefreshToken = () => {
    const details = loginDetails();
    return details?.refresh_token;
}

export const updateTokens = (access_token: string, refresh_token: string) => {
    const details = loginDetails();
    if (details) {
        const updatedDetails = {
            ...details,
            access_token,
            refresh_token
        };
        localStorage.setItem('loginDetails', JSON.stringify(updatedDetails));
    }
}

const isTokenExpired = (token: string): boolean => {
    try {
      const [, payload] = token.split('.');
      const decodedPayload = JSON.parse(atob(payload));
      const expiryTime = decodedPayload.exp * 1000;
      return Date.now() >= expiryTime;
    } catch {
      return true;
    }
  };
  
  export const checkAuthAndLogout = () => {
    const token = getAccessToken();
    if (!token || isTokenExpired(token)) {
      localStorage.removeItem('loginDetails');
      localStorage.removeItem('userDetails');
      window.location.href = '/login';
      return null;
    }
    return token;
  };

export const getHeaders = () => {
    const myHeaders = new Headers();
    const token = checkAuthAndLogout();
    if (token) {
        myHeaders.append("Authorization", `Bearer ${token}`);
    }
    return myHeaders;
}

export const handleDownloadData = (data: any) => {
    if (!data) {
        toast.error("Unable to download data at this moment. No data available.");
        return;
      }
    const userProfile = data?.data;
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Profile Information", 10, 20);

    doc.setFontSize(16);
    doc.text("Personal Information", 10, 35);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Full Name:", 10, 45);
    doc.setFont("helvetica", "bold");
    doc.text(
      `${userProfile?.user.firstName} ${userProfile?.user.lastName}`,
      40,
      45
    );

    doc.setFont("helvetica", "normal");
    doc.text("Date of Birth:", 10, 55);
    doc.setFont("helvetica", "bold");
    doc.text(
      `${new Date(userProfile?.dateOfBirth).toLocaleDateString()}`,
      40,
      55
    );

    doc.setFont("helvetica", "normal");
    doc.text("Gender:", 10, 65);
    doc.setFont("helvetica", "bold");
    doc.text(`${userProfile?.gender}`, 40, 65);

    doc.setFont("helvetica", "normal");
    doc.text("Location:", 10, 75);
    doc.setFont("helvetica", "bold");
    doc.text(`${userProfile?.location || "Not provided"}`, 40, 75);

    doc.setFont("helvetica", "normal");
    doc.text("Phone Number:", 10, 85);
    doc.setFont("helvetica", "bold");
    doc.text(`${userProfile?.phoneNumber}`, 40, 85);

    doc.setFont("helvetica", "normal");
    doc.text("Email:", 10, 95);
    doc.setFont("helvetica", "bold");
    doc.text(`${userProfile?.email}`, 40, 95);

    doc.setDrawColor(200);
    doc.line(10, 105, 200, 105);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Profile Summary", 10, 115);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(userProfile?.bio || "No bio provided.", 10, 125);

    doc.line(10, 135, 200, 135);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Skills", 10, 145);
    doc.setFont("helvetica", "normal");
    const skills = userProfile?.skills || [];
    if (skills.length > 0) {
      let startY = 155;
      skills.forEach((skill) => {
        doc.text(`• ${skill}`, 15, startY);
        startY += 10;
      });
    } else {
      doc.text("No skills provided.", 10, 155);
    }

    const fileName = `${userProfile?.user.firstName}_${userProfile?.user.lastName}.pdf`;
    doc.save(fileName);
  };
export const formatRelativeTime = (createdAt: string) => {
    const date = new Date(createdAt);
    const now = new Date();
    
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const timeString = date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true 
    });
  
    if (targetDate.getTime() === today.getTime()) {
      return timeString;
    } else if (targetDate.getTime() === yesterday.getTime()) {
      return `Yesterday, ${timeString}`;
    } else if (today.getTime() - targetDate.getTime() < 7 * 24 * 60 * 60 * 1000) {
      return `${date.toLocaleDateString('en-US', { weekday: 'long' })}, ${timeString}`;
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    }
  };
