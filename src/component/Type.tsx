import React from 'react'
import type1 from '../img/type1.png'
import type2 from '../img/type2.png'
import type4 from '../img/type4.png'
import type6 from '../img/type6.png'

function Type() {
    return (
        <div className='types'>
            <div className='row type'>
                <img className='typeImg' src={type1} />
                <div className='typeText'>
                    <div>KOONgel 쿤젤</div>
                    <div className='typeOverview'>
                        쿤젤은 총 100컬러로 구성된 키젤의 <br/>메인 기본 컬러젤 라인입니다.<br/>
                        진한 발색과 터치컬러로써의 훌륭함과 부드러움을 가지고 있습니다.
                        
                    </div>
                </div>
            </div>

            <div className='row type'>
                <img className='typeImg' src={type2} />
                <div className='typeText'>
                    <div>KNITgel 니트젤</div>
                    <div className='typeOverview'>
                        니트젤은 따듯함과 시원함을 모두 표현할 수 있는 활용도 높은 러블리한 질감 컬러젤입니다.
                        퀼트패턴이나 체크, 3D 엠보 캐릭터 아트 시에 유용합니다.
                    </div>
                </div>
            </div>

            <div className='row type'>
                <img className='typeImg' src={type4} />
                <div className='typeText'>
                    <div>탄생석젤</div>
                    <div className='typeOverview'>
                        탄생석 젤은 12가지 탄생석을 표현한 <br/>12컬러의 글리터 젤로, 프렌치 기법을 <br/>가능하게 개발되었으며 포인트 컬러로써도 탁월합니다.
                    </div>
                </div>
            </div>

            <div className='row type'>
                <img className='typeImg' src={type6} />
                <div className='typeText'>
                    <div>향기젤</div>
                    <div className='typeOverview'>
                        향기젤은 젤의 유해 물질 중 냄새로 <br/>느껴지는 독성을 최대로 빼는 연구로 탄생한 젤로, 오랜 시간 젤을 접하는 <br/>네일인의 건강을 위해 제작되었습니다.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Type