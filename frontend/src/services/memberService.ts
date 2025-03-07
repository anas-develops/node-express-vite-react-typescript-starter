import appConfig from "../config/appConfig";
import { GetMemberDetailsResponse } from "../types/members";

export const getMemberDetails = async (
    memberId: string
): Promise<GetMemberDetailsResponse> => {
    let url = `${appConfig.app.apiBaseUrl}/api/member/${memberId}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        if (data.error && data.message) {
            throw new Error(data.message);
        }
    }

    return data;
};
