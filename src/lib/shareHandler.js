import { Share } from "react-native";

export const shareHandler = async () => {
    try {
      const referralLink = "https://example.com/referral?code=XYZ";
      const referralMessage = `
          🌟 Exclusive Offer! 🌟
          Use my referral link to join [App Name] and earn rewards! 🎁
    
          🔗 Referral Link: ${referralLink}
    
          Don’t miss out on this great opportunity. Share with friends and start earning today! 💰
    
          #Referral #EarnRewards #JoinNow
        `;
      const result = await Share.share({
        title: "Check this out!",
        message: referralMessage,
        url: referralLink,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("share with acivity type og :", result.activityType);
        } else {
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dissmess");
      }
    } catch (error) {
      console.error("Error sharing:", error); // Log error for debugging
    }
  };