import { create } from "zustand";
import { getMemberDetails } from "../services/memberService";
import { GetMemberDetailsResponse } from "../types/members";

interface IMember {
    memberId: string | null;
    memberName: string | null;
    memberTitle: string | null;
    memberCompany: string | null;
    memberData: GetMemberDetailsResponse | null;
    isFetchingMember: boolean | null;
    defaultCities: string[];
    setMemberId: (memberId: string) => void;
    setMemberName: (memberName: string) => void;
    setMemberTitle: (memberTitle: string) => void;
    setMemberCompany: (memberCompany: string) => void;
    setMemberData: (memberData: GetMemberDetailsResponse) => void;
    fetchMember: (memberId: string) => Promise<GetMemberDetailsResponse>;
}

export const useMemberStore = create<IMember>((set) => ({
    memberId: "",
    memberName: "",
    memberTitle: "",
    memberCompany: "",
    memberData: null,
    isFetchingMember: null,
    defaultCities: [],
    setMemberId: (memberId: string) => set({ memberId }),
    setMemberName: (memberName: string) => set({ memberName }),
    setMemberTitle: (memberTitle: string) => set({ memberTitle }),
    setMemberCompany: (memberCompany: string) => set({ memberCompany }),
    setMemberData: (memberData: GetMemberDetailsResponse) =>
        set({ memberData }),
    fetchMember: async (
        memberId: string
    ): Promise<GetMemberDetailsResponse> => {
        set({
            memberId: "",
            memberName: "",
            memberTitle: "",
            memberCompany: "",
            memberData: null,
            isFetchingMember: true,
        });
        const data = await getMemberDetails(memberId);

        if (data && data.fields) {
            set({
                memberData: data,
                memberId: data.id,
                memberName: `${data.fields.FirstName} ${data.fields.LastName}`,
                memberTitle: data.fields.Title,
                memberCompany: data.fields.Company,
                defaultCities: data.fields.DefaultCitySelection,
            });
        }
        set({ isFetchingMember: false });
        return data;
    },
}));
