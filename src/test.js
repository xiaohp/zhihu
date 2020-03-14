const { log, parse } = require('./util')

log('run test start')

const main = function () {
    let s = 'https://www.zhihu.com/api/v4/members/tombkeeper/answers?include=data%5B*%5D.is_normal%2Cadmin_closed_comment%2Creward_info%2Cis_collapsed%2Cannotation_action%2Cannotation_detail%2Ccollapse_reason%2Ccollapsed_by%2Csuggest_edit%2Ccomment_count%2Ccan_comment%2Ccontent%2Ceditable_content%2Cvoteup_count%2Creshipment_settings%2Ccomment_permission%2Cmark_infos%2Ccreated_time%2Cupdated_time%2Creview_info%2Cexcerpt%2Cis_labeled%2Clabel_info%2Crelationship.is_authorized%2Cvoting%2Cis_author%2Cis_thanked%2Cis_nothelp%2Cis_recognized%3Bdata%5B*%5D.author.badge%5B%3F(type%3Dbest_answerer)%5D.topics%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20data%5B*%5D.question.has_publishing_draft%2Crelationship&offset=10&limit=10&sort_by=created'

    let req = parse(s)
    log('req is ', req)
}

main()

log('run test end')