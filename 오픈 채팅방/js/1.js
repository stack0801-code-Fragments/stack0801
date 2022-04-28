console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))

function solution(record) {

    const user = {}
    const answer =[]
    let cmd, uid, nickname

    for(r of record) {
        [cmd, uid, nickname] = r.split(' ')
        if(cmd !== "Leave" && (!user[uid] || user[uid] && user[uid] !== nickname || cmd === "Change"))
            user[uid] = nickname
    }

    for(r of record) {
        [cmd, uid, nickname] = r.split(' ')
        if(cmd === "Enter")
            answer.push(user[uid] + "님이 들어왔습니다.")
        else if(cmd === "Leave")
            answer.push(user[uid] + "님이 나갔습니다.")
    }

    return answer
}