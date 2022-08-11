//约束后台数据实现MemberEntity
import { MemberEntity } from "../model";
//AxiosResponse 类型声明
import Axios,{AxiosResponse} from "axios";

const githubURL = "http://api.github.com";
const githubMembersUrl = `${githubURL}/orgs/lemoncode/members`
//ts bug 驱动代码
//Promise 接口<T>

export const getMembersCollection = ():Promise<MemberEntity[]>=>{
    const promise = new Promise<MemberEntity[]>((resolve,reject)=>{
        try{
            Axios.get(githubMembersUrl).then(
                response=>resolve(mapMemberListApiToModel(response))
            )
        }catch(e){
            reject(e)
        }
    })
    return promise
}

// const mapMemberListApiToModel = ({
//     data
// }:AxiosResponse<MemberEntity[]>):MemberEntity[] => data.map(githubMember => ({
//     id:githubMember.id,
//     login:githubMember.login,
//     avatar_url:githubMember.avatar_url
// }))

const mapMemberListApiToModel = 
({data}:AxiosResponse<MemberEntity[]>):MemberEntity[]=>data.map(githubMember=>({
        id:githubMember.id,
        login:githubMember.login,
        avatar_url:githubMember.avatar_url
    }))


//前端，沟通经验，接口地址和方法，更加的自信
//界面需要数据，格式，前端是清楚的
//先使用fastmock等工具mock一下，得到假数据
//不依赖后端接口，先把前端功能实现
//url切换成后端开发后，真正的数据所在的url
//前后端分离
