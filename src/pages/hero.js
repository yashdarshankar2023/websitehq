import { useState } from 'react'


import "../App.css"

const Hero = () => {

    const [backgroundImage, setBackgroundImage] = useState('/assets/heroai.png');

    const handleCardHover = (newImage) => {
        setBackgroundImage(newImage);
    };

    const handleCardLeave = () => {
        setBackgroundImage('/assets/heroai.png');
    }
    const [selectedOption, setSelectedOption] = useState('Board');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    const [selectedImage, setSelectedImage] = useState('https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/engineering.png');

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };
    return (
        <div>
            <section className='heroheading'>
                <h1>Write, plan, share.<br />With AI at your side.</h1>
                <h2>Notion is the connected workspace where better, faster work happens.</h2>
                <button>Get Notion Free  →</button>
                <br />
                <img src='https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png' alt='hero img'></img>
                <div className='heroCards'>
                    <div className='heroCard'
                        onMouseOver={() => handleCardHover('/assets/heroai.png')}
                        onMouseLeave={handleCardLeave}>
                        <h3><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <path d="M8.80451 5.8082C9.18368 5.67695 9.18368 5.44362 8.80451 5.29779L6.74827 4.51029C6.38369 4.37904 5.96077 3.95612 5.81494 3.57696L5.02744 1.5207C4.89619 1.14154 4.66286 1.14154 4.51702 1.5207L3.72952 3.57696C3.59827 3.94154 3.17536 4.36445 2.79619 4.51029L0.739941 5.29779C0.360775 5.42904 0.360775 5.66237 0.739941 5.8082L2.79619 6.5957C3.16077 6.72695 3.58369 7.14987 3.72952 7.52904L4.51702 9.58525C4.64827 9.96442 4.88161 9.96442 5.02744 9.58525L5.81494 7.52904C5.94619 7.16445 6.36911 6.74154 6.74827 6.5957L8.80451 5.8082Z" fill="#9D34DA" />
                            <path d="M18.8234 13.0123C19.99 12.7207 19.99 12.2394 18.8234 11.9478L16.2421 11.3061C15.0755 11.0144 13.8796 9.81859 13.588 8.65193L12.9463 6.07068C12.6546 4.90401 12.1734 4.90401 11.8817 6.07068L11.24 8.65193C10.9484 9.81859 9.75255 11.0144 8.58588 11.3061L6.00464 11.9478C4.83797 12.2394 4.83797 12.7207 6.00464 13.0123L8.58588 13.654C9.75255 13.9457 10.9484 15.1415 11.24 16.3082L11.8817 18.8894C12.1734 20.0561 12.6546 20.0561 12.9463 18.8894L13.588 16.3082C13.8796 15.1415 15.0755 13.9457 16.2421 13.654L18.8234 13.0123Z" fill="#9D34DA" />
                        </svg>AI <span>Now with Q&A</span></h3>
                        <p>
                            Ask literally anything. Notion
                            will answer.
                        </p>
                        <a style={{ color: '#9d34da' }} href='temp'>Learn more →</a>

                    </div>

                    <div className='heroCard' onMouseOver={() => handleCardHover('/assets/herowikis.png')}
                        onMouseLeave={handleCardLeave}>
                        <h3><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <path d="M8.84092 17.6428H2.62842C2.17842 17.6428 1.80342 17.2678 1.80342 16.8178V9.0428C1.80342 8.5553 2.05342 8.2803 2.52842 8.2803H2.90342V6.8803H2.12842C1.09092 6.8803 0.253418 7.7178 0.253418 8.7553V17.1928C0.253418 18.2303 1.09092 19.0678 2.12842 19.0678H8.84092V17.6428ZM18.0659 6.8678H17.2909V8.2678H17.7034C18.1534 8.2678 18.3784 8.5303 18.3784 8.9428V16.8303C18.3784 17.2803 18.0159 17.6553 17.5534 17.6553H11.3409V19.0553H18.0659C19.1034 19.0553 19.9409 18.2178 19.9409 17.1803V8.7428C19.9409 7.7053 19.1034 6.8678 18.0659 6.8678Z" fill="#EA4E43" />
                            <path d="M16.5034 2.4928C14.3409 2.7803 11.7534 3.6303 10.1034 4.6428C8.44087 3.6303 5.85337 2.7803 3.70337 2.4928V15.3053C5.47837 15.5178 7.31587 15.9303 9.17837 16.6553L10.1159 17.0678L11.0534 16.6553C12.9159 15.9303 14.7534 15.5053 16.5284 15.3053V2.4928H16.5034ZM5.56587 13.9053V4.6553C6.90337 4.8928 8.45337 5.4928 9.16587 6.0678V14.9178C8.12837 14.4928 6.67837 14.1053 5.56587 13.9053ZM14.6284 13.9053C13.5284 14.1053 12.0659 14.4928 11.0284 14.9178V6.0678C11.7284 5.4803 13.2909 4.8928 14.6284 4.6553V13.9053Z" fill="#EA4E43" />
                        </svg>Wikis</h3>
                        <p>Centralize your knowledge.
                            No more hunting for answers.
                        </p>
                        <a style={{ color: "#EA4E43" }} href='temp'>Learn more →</a>

                    </div>

                    <div className='heroCard' onMouseOver={() => handleCardHover('/assets/heroproject.png')}
                        onMouseLeave={handleCardLeave}>
                        <h3><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7658 4.35528L17.2533 6.90528L17.2408 6.88026C16.0033 8.14279 15.0783 8.43026 13.2783 8.24279L11.9908 9.54279C12.4408 10.3678 12.3283 11.4303 11.6408 12.1303C10.8033 12.9928 9.4158 12.9928 8.55331 12.1553C7.69082 11.3178 7.67829 9.9303 8.52829 9.06777C9.2158 8.36777 10.2658 8.24279 11.1033 8.68026L12.3908 7.38026C12.1783 5.58026 12.4408 4.65528 13.6783 3.39277L16.1908 0.842773L16.8908 3.71777L19.7658 4.35528ZM13.8284 9.56777H14.1659V9.59275C14.6284 9.59275 15.0409 9.54275 15.4284 9.45524C15.5159 9.84275 15.5659 10.2303 15.5659 10.6427C15.5659 13.6678 13.1159 16.1178 10.0909 16.1178C7.06588 16.1178 4.61588 13.6678 4.61588 10.6427C4.61588 7.61777 7.06588 5.16777 10.0909 5.16777C10.4659 5.16777 10.8409 5.20524 11.1909 5.28026C11.0909 5.76777 11.0534 6.29275 11.0909 6.88026C10.7659 6.79275 10.4409 6.73026 10.0909 6.73026C7.9409 6.73026 6.1909 8.48026 6.1909 10.6303C6.1909 12.7803 7.9409 14.5303 10.0909 14.5303C12.2409 14.5303 13.9909 12.7803 13.9909 10.6303C13.9909 10.2552 13.9284 9.90524 13.8284 9.56777ZM17.2908 8.53026C17.5783 8.31777 17.8533 8.06777 18.1408 7.78026L18.7908 7.11777C19.2158 8.20528 19.4658 9.38026 19.4658 10.6178C19.4658 15.7927 15.2658 19.9928 10.0908 19.9928C4.9158 19.9928 0.71582 15.7927 0.71582 10.6178C0.71582 5.44275 4.9158 1.24277 10.0908 1.24277C11.2658 1.24277 12.3908 1.46777 13.4283 1.86777L12.7908 2.51777C12.5033 2.80527 12.2658 3.09277 12.0533 3.38027C11.4283 3.21777 10.7658 3.11777 10.0908 3.11777C5.95331 3.11777 2.59082 6.48026 2.59082 10.6178C2.59082 14.7553 5.95331 18.1178 10.0908 18.1178C14.2283 18.1178 17.5908 14.7553 17.5908 10.6178C17.5908 9.89275 17.4783 9.19275 17.2908 8.53026Z" fill="#0A85D1" />
                        </svg>Projects</h3>
                        <p>Manage complex projects
                            without the chaos.
                        </p>
                        <a style={{ color: "#0A85D1" }} href='temp'>Learn more →</a>

                    </div>

                    <div className='heroCard' onMouseOver={() => handleCardHover('/assets/herodocs.png')}
                        onMouseLeave={handleCardLeave}>
                        <h3><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <path d="M16.5072 6.54101L11.4745 2.46345C11.1807 2.21856 10.8011 2.08386 10.4092 2.08386H4.7276C3.79699 2.08386 3.05005 2.8308 3.05005 3.76141V17.5492C3.05005 18.4798 3.80923 19.2267 4.7276 19.2267H15.4541C16.3847 19.2267 17.1317 18.4798 17.1317 17.5492V7.85121C17.1317 7.34917 16.899 6.85937 16.5072 6.54101ZM11.1562 3.76141L15.3929 7.45937C15.5643 7.60631 15.4664 7.88794 15.2337 7.88794H11.6092C11.3643 7.88794 11.1562 7.69203 11.1562 7.43488V3.76141ZM14.7684 17.5369H5.40107C5.11944 17.5369 4.88678 17.3043 4.88678 17.0104V4.2757C4.88678 3.99407 5.11944 3.76141 5.40107 3.76141H9.62556V7.90019C9.62556 8.74509 10.3113 9.4308 11.1562 9.4308H15.2827V17.0226C15.2827 17.3043 15.05 17.5369 14.7684 17.5369Z" fill="#FAA700" />
                            <path d="M7.33569 11.7329H12.8459H7.33569ZM7.33569 14.6594H12.8459H7.33569Z" fill="#FAA700" />
                            <path d="M7.33569 11.7329H12.8459M7.33569 14.6594H12.8459" stroke="#FAA700" stroke-width="0.74449" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>Docs</h3>
                        <p>
                            Simple, powerful, beautiful.
                            Next-gen notes & docs.
                        </p>
                        <a style={{ color: "#FAA700" }} href='temp'>Learn more →</a>

                    </div>



                </div>
                <div className='herobox' style={{ backgroundImage: `url(${backgroundImage})` }}></div>

            </section>
            <section className='advertize'>
                <h2>Millions run on Notion every day</h2>
                <p>
                    Powering the world’s best teams, from next-generation startups
                    to established enterprises.
                </p>
                <a href='read'>Read customer stories →</a>
                <div className='advertizeBox1'>
                    <img src='/assets/figma.png' width='87px' height='28.67' alt='figma' />
                    <img src='/assets/ad2.png' width='87px' height='28.67' alt='figma' />
                    <img src='/assets/ad3.png' width='87px' height='28.67' alt='figma' />
                    <img src='/assets/ad4.png' width='87px' height='28.67' alt='figma' />
                    <img src='/assets/ad5.png' width='87px' height='28.67' alt='figma' />
                    <img src='/assets/ad6.png' width='87px' height='28.67' alt='figma' />
                    <img src='/assets/ad7.png' width='87px' height='28.67' alt='figma' />
                    <img src='/assets/ad8.png' width='87px' height='28.67' alt='figma' />
                    <img src='/assets/ad9.png' width='87px' height='28.67' alt='figma' />
                    <img src='/assets/ad10.png' width='87px' height='28.67' alt='figma' />
                    <img src='/assets/ad11.png' width='87px' height='28.67' alt='figma' />
                    <img src='/assets/ad12.png' width='87px' height='28.67' alt='figma' />
                    <img src='/assets/ad13.png' width='87px' height='28.67' alt='figma' />
                    <img src='/assets/ad14.png' width='87px' height='28.67' alt='figma' />

                </div>
                <div className='advertizeBox2'>
                    <div>
                        <h3>Consolidate tools.
                            Cut costs.</h3>
                        <img src='../assets/adbox2.png' alt='invalid' />
                    </div>
                    <img src='../assets/adbox3.png' alt='invalid' />
                </div>
                <h4>We got rid of nearly a dozen different tools because of<br />what Notion does for us.</h4>
                <div className='advertizeBox3'>
                    <img src='/assets/adbox4.png' alt='invalid' />

                    <h5>Justin Watt<br /><span>Director of Ops & Marketing, MetaLab</span>
                    </h5>




                </div>

            </section>
            <section className='buildingBlocks'>
                <h2>
                    <img src='/assets/buildingblocks.png' alt='invalid' />Powerful building blocks
                </h2>
                <div className='buildingBlocksbox1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <path d="M18.6727 13.884L23.9539 19.1653L18.6727 24.4465L16.9502 22.724L19.2902 20.384H16.3896C14.8214 20.384 13.6636 19.7909 12.7536 18.5112L11.6527 16.9715L13.1518 14.8753L14.7361 17.0975C15.1911 17.7353 15.6055 17.9465 16.3896 17.9465H19.2902L16.9502 15.6065L18.6727 13.884ZM16.3896 9.00903H19.2902L16.9502 11.349L18.6727 13.0715L23.9539 7.79028L18.6727 2.50903L16.9502 4.23153L19.2902 6.57153H16.3896C14.8214 6.57153 13.6636 7.16466 12.7536 8.44435L6.57457 17.0975C6.11957 17.7353 5.7052 17.9465 4.92113 17.9465H2.53238V20.384H4.92113C6.48926 20.384 7.64707 19.7909 8.55707 18.5112L14.7361 9.8581C15.1911 9.22028 15.6055 9.00903 16.3896 9.00903ZM6.57051 9.8581L8.15488 12.0803L9.65394 9.98403L8.55301 8.44435C7.63895 7.16872 6.48519 6.57153 4.91707 6.57153H2.52832V9.00903H4.91707C5.69707 9.00903 6.11551 9.22435 6.57051 9.8581Z" fill="#0A85D1" />
                    </svg>
                    <h3>Visualize, filter & sort any way you want</h3>
                    <p>
                        Show only tasks assigned to you, or items marked as urgent. Break down any project in the way that’s most helpful
                        to you.
                    </p>
                    {selectedOption === 'Board' && <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/kanban.png" alt="Board " />}
                    {selectedOption === 'Table' && <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/table.png" alt="Table " />}
                    {selectedOption === 'Timeline' && <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/timeline.png" alt="Timeline " />}
                    {selectedOption === 'Calendar' && <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/timeline.png" alt="Calendar " />}
                    {selectedOption === 'Gallery' && <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/gallery.png" alt="Gallery" />}
                    {selectedOption === 'List' && <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/list.png" alt="List " />}

                    <div>
                        <div onClick={() => handleOptionClick('Board')}>Board</div>
                        <div onClick={() => handleOptionClick('Table')}>Table</div>
                        <div onClick={() => handleOptionClick('Timeline')}>Timeline</div>
                        <div onClick={() => handleOptionClick('Calendar')}>Calendar</div>
                        <div onClick={() => handleOptionClick('Gallery')}>Gallery</div>
                        <div onClick={() => handleOptionClick('List')}>List</div>
                    </div>
                </div>
                <div className='buildingBlocksbox2'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                            <g clip-path="url(#clip0_1_678)">
                                <path d="M13.0482 21.3215C14.3205 21.3215 15.5182 21.169 16.6423 20.8648C17.7225 20.5796 18.7682 20.1768 19.7606 19.6636C20.6592 19.1943 21.5105 18.6394 22.3025 18.0065C22.9932 17.4615 23.635 16.8572 24.2204 16.2004C24.7482 15.5929 25.1478 15.0304 25.4216 14.5156C25.7007 13.9947 25.8402 13.5753 25.8402 13.2589C25.8402 12.9426 25.7007 12.5266 25.4216 12.0109C25.1478 11.4961 24.7482 10.938 24.2204 10.3357C23.6369 9.67412 22.995 9.06645 22.3025 8.51999C21.5093 7.88678 20.6545 7.33483 19.751 6.87245C18.763 6.35452 17.7204 5.94843 16.6423 5.66172C15.4695 5.35129 14.2606 5.19799 13.0474 5.20585C11.7994 5.20585 10.6146 5.35752 9.49144 5.66172C8.37344 5.96592 7.34037 6.36979 6.39137 6.87245C5.48741 7.33921 4.62989 7.89088 3.83037 8.51999C3.13235 9.06651 2.48441 9.67413 1.89424 10.3357C1.3673 10.938 0.960838 11.4953 0.675704 12.0109C0.396638 12.5266 0.255371 12.9426 0.255371 13.2589C0.255371 13.5753 0.395771 13.9939 0.674838 14.5156C0.960838 15.0313 1.36644 15.5929 1.89424 16.2004C2.4281 16.8027 3.0703 17.4051 3.8217 18.0065C4.62217 18.6366 5.4792 19.1913 6.38184 19.6636C7.3688 20.1747 8.40822 20.5775 9.4819 20.8648C10.6051 21.169 11.7942 21.3215 13.0474 21.3215H13.0482ZM13.0482 19.5241C12.055 19.5241 11.1026 19.4027 10.19 19.1609C9.3083 18.9282 8.45344 18.6037 7.63937 18.1929C6.88538 17.8142 6.16313 17.3754 5.47964 16.8807C4.89429 16.4487 4.34053 15.9755 3.82257 15.4646C3.35717 14.9931 2.99664 14.5615 2.7427 14.1707C2.49397 13.7789 2.37004 13.4747 2.37004 13.2581C2.37004 13.0778 2.49397 12.8022 2.7427 12.4295C2.99664 12.0569 3.35717 11.6348 3.82257 11.1633C4.93646 10.036 6.22537 9.09621 7.63937 8.38045C8.45221 7.95737 9.30706 7.62043 10.19 7.37512C11.1209 7.11828 12.0826 6.98998 13.0482 6.99379C14.0414 6.99379 14.9913 7.12032 15.897 7.37512C16.8035 7.62905 17.6537 7.96445 18.4484 8.38045C19.2423 8.79039 19.9625 9.23672 20.6082 9.72119C21.2 10.1586 21.7572 10.641 22.2748 11.1642C22.7402 11.6357 23.0972 12.0577 23.3451 12.4295C23.5999 12.8022 23.7264 13.0795 23.7264 13.2589C23.7264 13.4756 23.5999 13.7798 23.3451 14.1715C23.0972 14.5615 22.7402 14.994 22.2748 15.4655C21.152 16.5717 19.8604 17.4923 18.4484 18.1929C17.6537 18.5967 16.8035 18.9191 15.897 19.1609C14.9913 19.4036 14.0414 19.5249 13.0482 19.5249V19.5241ZM13.0569 18.2761C13.7256 18.2806 14.3881 18.1478 15.0034 17.8861C15.6009 17.6266 16.1442 17.257 16.605 16.7967C17.0618 16.3348 17.428 15.7916 17.6849 15.1951C17.9449 14.5867 18.0758 13.9419 18.0758 13.2589C18.0791 12.5995 17.9507 11.9461 17.6982 11.337C17.4456 10.7278 17.074 10.1753 16.605 9.71165C16.1467 9.25313 15.6024 8.88942 15.0034 8.64132C14.3884 8.37934 13.7262 8.2463 13.0578 8.25045C12.3802 8.24423 11.7086 8.37696 11.0844 8.64045C10.4853 8.88881 9.94107 9.25282 9.48277 9.71165C9.02182 10.1668 8.65464 10.708 8.40204 11.3046C8.14543 11.9243 8.01576 12.5891 8.0207 13.2598C8.0207 13.9427 8.15071 14.5875 8.41071 15.1959C8.67157 15.7983 9.03211 16.3313 9.49144 16.7975C9.95077 17.2569 10.4812 17.62 11.0835 17.8869C11.691 18.1469 12.3488 18.2761 13.0569 18.2761ZM13.0482 14.8874C12.595 14.8874 12.2102 14.7271 11.8938 14.4038C11.7416 14.2548 11.6211 14.0766 11.5395 13.8798C11.4579 13.6831 11.4169 13.4719 11.4189 13.2589C11.4156 13.0458 11.4561 12.8342 11.5378 12.6373C11.6195 12.4404 11.7407 12.2623 11.8938 12.1141C12.2102 11.7969 12.5958 11.6391 13.0482 11.6391C13.2615 11.6357 13.4733 11.6761 13.6703 11.7578C13.8674 11.8395 14.0456 11.9608 14.194 12.1141C14.5164 12.4304 14.6776 12.8117 14.6776 13.2581C14.6776 13.7001 14.5164 14.0814 14.194 14.4038C14.047 14.5595 13.8692 14.6829 13.672 14.7663C13.4748 14.8497 13.2624 14.8912 13.0482 14.8883V14.8874Z" fill="#0A85D1" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_678">
                                    <rect width="26" height="26" fill="white" transform="translate(0.0908203 0.0378418)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h3>Customize the info you track</h3>
                        <p>Create your own labels, tags, owners, and more, so
                            everyone has context and everything stays organized.</p>
                        <img src='/assets/buildingblocks4.png' alt='invalid' />
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                            <path d="M13.6503 22.4879C14.9777 22.4879 16.1369 22.3377 17.128 22.0373C18.1251 21.743 18.8999 21.3316 19.4525 20.8031C20.0111 20.2745 20.2904 19.6619 20.2904 18.9651C20.2904 18.5026 20.2123 18.1212 20.0561 17.8209C19.906 17.5146 19.7318 17.2503 19.5335 17.0281C19.3414 16.8058 19.1672 16.5926 19.011 16.3884C18.8609 16.1781 18.7857 15.9409 18.7857 15.6766C18.7857 15.4303 18.9119 15.2111 19.1642 15.0189C19.4164 14.8207 19.7408 14.6255 20.1372 14.4333C20.5396 14.2411 20.9631 14.0308 21.4075 13.8026C21.8521 13.5684 22.2725 13.2891 22.6689 12.9648C23.0713 12.6404 23.3986 12.253 23.6509 11.8025C23.9032 11.346 24.0294 10.7995 24.0294 10.1627C24.0294 9.21975 23.7951 8.36384 23.3266 7.59502C22.8641 6.82621 22.2034 6.1655 21.3445 5.61291C20.4916 5.06033 19.4705 4.63688 18.2813 4.34257C17.092 4.04224 15.7706 3.89209 14.317 3.89209C12.437 3.89209 10.7222 4.12033 9.17253 4.57681C7.62891 5.02729 6.2985 5.66998 5.18131 6.50486C4.07013 7.33975 3.21122 8.33682 2.60457 9.49605C2.00393 10.6493 1.70361 11.9286 1.70361 13.3341C1.70361 14.7036 1.98892 15.9499 2.55952 17.0731C3.13013 18.1903 3.944 19.1513 5.00112 19.9562C6.06425 20.767 7.32559 21.3917 8.78513 21.8302C10.2447 22.2687 11.8664 22.4879 13.6503 22.4879ZM13.6503 20.5868C12.1367 20.5868 10.7612 20.4127 9.52395 20.0643C8.29262 19.7219 7.23549 19.2324 6.35256 18.5957C5.46962 17.953 4.78789 17.1872 4.30738 16.2983C3.83288 15.4094 3.59562 14.4213 3.59562 13.3341C3.59562 12.1989 3.84789 11.1688 4.35243 10.2438C4.86297 9.31885 5.58975 8.52301 6.53274 7.8563C7.47575 7.18959 8.60498 6.67905 9.92033 6.32467C11.2358 5.96429 12.7013 5.7841 14.317 5.7841C15.8907 5.7841 17.2631 5.96729 18.4344 6.33368C19.6057 6.70007 20.5126 7.21361 21.1553 7.87432C21.804 8.52901 22.1283 9.29183 22.1283 10.1627C22.1283 10.6673 22.0022 11.0938 21.7499 11.4421C21.4976 11.7844 21.1703 12.0788 20.7679 12.3251C20.3715 12.5713 19.948 12.7995 19.4976 13.0098C19.053 13.214 18.6296 13.4302 18.2272 13.6585C17.8247 13.8867 17.4974 14.154 17.2451 14.4604C16.9928 14.7666 16.8668 15.148 16.8668 15.6045C16.8668 15.9949 16.9418 16.3253 17.092 16.5956C17.2481 16.8659 17.4254 17.1092 17.6235 17.3254C17.8217 17.5416 17.9959 17.7578 18.1461 17.974C18.3022 18.1843 18.3803 18.4275 18.3803 18.7038C18.3803 19.2745 17.9479 19.7309 17.083 20.0732C16.2241 20.4156 15.0798 20.5868 13.6503 20.5868ZM12.8755 18.5236C13.35 18.5236 13.7795 18.4125 14.1639 18.1903C14.5543 17.962 14.8606 17.6558 15.0828 17.2713C15.311 16.8869 15.4252 16.4545 15.4252 15.9739C15.4252 15.5114 15.3081 15.088 15.0739 14.7036C14.8456 14.3192 14.5393 14.0128 14.1549 13.7846C13.7704 13.5504 13.344 13.4333 12.8755 13.4333C12.413 13.4333 11.9895 13.5504 11.6051 13.7846C11.2207 14.0128 10.9114 14.3192 10.6772 14.7036C10.4489 15.088 10.3348 15.5114 10.3348 15.9739C10.3348 16.4424 10.4489 16.8719 10.6772 17.2623C10.9114 17.6467 11.2207 17.953 11.6051 18.1813C11.9895 18.4095 12.413 18.5236 12.8755 18.5236ZM12.8755 17.3434C12.6232 17.3434 12.3949 17.2833 12.1908 17.1632C11.9866 17.0431 11.8213 16.8778 11.6952 16.6677C11.5751 16.4574 11.515 16.2262 11.515 15.9739C11.515 15.6917 11.5781 15.4514 11.7043 15.2532C11.8304 15.0549 11.9955 14.9018 12.1998 14.7937C12.404 14.6796 12.6232 14.6225 12.8575 14.6225C13.0977 14.6165 13.323 14.6675 13.5332 14.7756C13.7434 14.8837 13.9146 15.037 14.0467 15.2352C14.1789 15.4333 14.245 15.6796 14.245 15.9739C14.245 16.2262 14.1849 16.4574 14.0647 16.6677C13.9446 16.8778 13.7795 17.0431 13.5692 17.1632C13.365 17.2833 13.1338 17.3434 12.8755 17.3434ZM6.61383 14.5504C7.02827 14.5504 7.37965 14.4032 7.66795 14.1089C7.95626 13.8086 8.10041 13.4542 8.10041 13.0458C8.10041 12.6314 7.95626 12.28 7.66795 11.9917C7.37965 11.6974 7.02827 11.5502 6.61383 11.5502C6.21141 11.5502 5.86303 11.6974 5.56872 11.9917C5.27441 12.28 5.12725 12.6314 5.12725 13.0458C5.12725 13.4542 5.27441 13.8086 5.56872 14.1089C5.86303 14.4032 6.21141 14.5504 6.61383 14.5504ZM9.85725 11.6944C10.3738 11.6944 10.8123 11.5142 11.1727 11.1538C11.539 10.7934 11.7223 10.3489 11.7223 9.82039C11.7223 9.30984 11.539 8.87739 11.1727 8.52301C10.8123 8.16262 10.3738 7.98244 9.85725 7.98244C9.33474 7.98244 8.89022 8.16262 8.52387 8.52301C8.16348 8.87739 7.98329 9.30984 7.98329 9.82039C7.98329 10.3489 8.16348 10.7934 8.52387 11.1538C8.89022 11.5142 9.33474 11.6944 9.85725 11.6944ZM14.362 10.2619C14.7765 10.2619 15.1279 10.1147 15.4162 9.82039C15.7105 9.52607 15.8576 9.1717 15.8576 8.75726C15.8576 8.33682 15.7105 7.98244 15.4162 7.69413C15.1279 7.39982 14.7765 7.25266 14.362 7.25266C13.9476 7.25266 13.5903 7.39982 13.2899 7.69413C12.9956 7.98844 12.8484 8.34282 12.8484 8.75726C12.8484 9.1717 12.9956 9.52607 13.2899 9.82039C13.5903 10.1147 13.9476 10.2619 14.362 10.2619ZM18.4074 10.8295C18.7437 10.8295 19.029 10.7123 19.2633 10.4781C19.5035 10.2379 19.6237 9.94653 19.6237 9.60416C19.6237 9.2738 19.5035 8.9885 19.2633 8.74824C19.029 8.508 18.7437 8.38787 18.4074 8.38787C18.071 8.38787 17.7797 8.508 17.5335 8.74824C17.2932 8.9885 17.1731 9.2738 17.1731 9.60416C17.1731 9.94653 17.2932 10.2379 17.5335 10.4781C17.7797 10.7123 18.071 10.8295 18.4074 10.8295Z" fill="#0A85D1" />
                        </svg>
                        <h3>Build any page, communicate any idea</h3>
                        <p>Everything is drag and drop in Notion — images,
                            toggles, to-do’s, even embedded databases.</p>
                        <img src='/assets/buildingblocks5.png' alt='invalid' />
                    </div>

                </div>
                <br />
                <h4>Notion adapts to your needs. It’s as minimal or as<br />powerful as you need it to be.</h4>
                <div className='buildingBlocksbox3'>
                    <img src='/assets/buildingblocksbox3img.png' alt='invalid' />
                    <h6>Rahim Makani<br /><span>Director of Product, Matchgroup</span></h6>
                </div>

            </section>
            <section className='sidebyside'>
                <h2>
                    Every team, side-by-side
                </h2>
                <div className='sidebysidebox'>
                    <div onClick={() => handleImageClick('https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/engineering.png')}>
                        <img src='/assets/ssprofile1.png' alt='invalid' />
                        Engineering
                    </div>
                    <div onClick={() => handleImageClick('https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/design.png')}>
                        <img src='/assets/ssprofile2.png' alt='invalid' />
                        Design
                    </div>
                    <div onClick={() => handleImageClick('https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/product.png')}>
                        <img src='/assets/ssprofile3.png' alt='invalid' />
                        Product
                    </div>
                    <div onClick={() => handleImageClick('https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/marketing.png')}>
                        <img src='/assets/ssprofile4.png' alt='invalid' />
                        Marketing
                    </div>
                    <div onClick={() => handleImageClick('https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/operations.png')}>
                        <img src='/assets/ssprofile5.png' alt='invalid' />
                        Operations
                    </div>
                    <div onClick={() => handleImageClick('https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/hr.png')}>
                        <img src='/assets/ssprofile6.png' alt='invalid' />
                        HR
                    </div>
                </div>

                <div className='sidebysidebox2' style={{ backgroundImage: `url(${selectedImage})` }}></div>

            </section>
            <section className='creativity'>
                <h2>Join a global movement. Unleash your creativity.</h2>
                <p>Our vibrant community produces content, teaches courses, and leads events all over <br />the world.</p>
                <a href='temp'>Learn more →</a>
                <img src='/assets/creativity1.png' alt='invalid' />
                <div className='creativityBox1'>
                    <h3>1M+<span>community members<br /></span></h3>
                    <h3>150+<span>community groups<br /></span></h3>
                    <h3>50+<span>countries represented<br /></span></h3>
                </div>
                <div className='creativityBox1'>
                    <div>
                        <h6>An always-on support network</h6>
                        <p>Swap setups and share tips in over 149 online
                            communities.</p>
                        <img src='/assets/creativity2.png' width='288px' height='276.75px' alt='invalid' />
                    </div>
                    <div>
                        <h6>Choose your language</h6>
                        <p>Notion currently supports English, Korean, Japanese,
                            French, German, Spanish, and Portuguese. With more to
                            come!</p>
                        <img src='/assets/creativity3.png' width='288px' height='276.75px' alt='invalid' />
                    </div>



                </div>
                <div className='creativityBox2'>
                    <div>
                        <img src='/assets/creativity4.png' alt='invalid' />
                        <p>Community meet-up in Tokyo</p>
                        <div className='creativityBox2Circles'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                        </div>


                    </div>
                    <div>
                        <div>
                            <div>
                                <img src='/assets/creativityProfile1.png' alt='invalid' />
                                <h6>Deborah Mecca
                                    <br /><span>@DebMecca</span></h6></div>

                            <p>I used to HATE documenting things. And
                                then I started using <span>@NotionHQ</span> and I
                                document a lot. A LOT A LOT. Now I just
                                realize that it wasn't that I hated
                                documenting, I just hated Google Docs.</p>

                        </div>
                        <div>
                            <div>
                                <img src='/assets/creativityProfile2.png' alt='invalid' />
                                <h6>André Blackman
                                    <br /><span>@mindofandre</span></h6></div>

                            <p>One of the most incredible things about
                                <span>@NotionHQ</span> is the dynamic community
                                being built - creating and sharing at its
                                best.</p>

                        </div>
                        <div>
                            <div>
                                <img src='/assets/creativityProfile3.png' alt='invalid' />
                                <h6>Oliver Peyre
                                    <br /><span>@opeyre</span></h6></div>

                            <p><span>@NotionHQ</span> Truly impressed by the
                                velocity and quality of your work.
                                Making using Notion even more fun
                                week after week!</p>

                        </div>

                    </div>

                </div>
            </section>
            <section className='endlessways'>
                <div className='endlesswaysHeader'>
                    <h2>Endless ways to use it<br /><span>Browse all templates →</span></h2>
                    <img src='/assets/endless1.png' alt='invalid' />
                </div>
                <div className='endlesswaysBody'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                            <path d="M22.8408 14.5H19.9971V22.625H15.1221V16.125H11.0596V22.625H6.18457V14.5H3.34082V12.875L13.0908 3.125L16.7471 6.78125V3.9375H19.9971V10.0312L22.8408 12.875V14.5Z" fill="#EA4E43" />
                        </svg>
                        <h3>Company wiki</h3>
                        <a href='temp'>Get template →</a>
                        <img src='/assets/endless2.png' alt='invalid' />
                    </div>
                    <div>
                        <h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <g clip-path="url(#clip0_1_829)">
                                    <path d="M3.12842 26.2643C3.95134 26.2665 4.63931 25.595 4.6421 24.7471L4.66393 18.1265C5.03835 18.0153 5.91204 17.7433 7.13394 17.7466C11.5352 17.7583 14.8069 20.0613 19.2082 20.073C21.0785 20.078 22.2016 19.7942 23.1881 19.3355C24.1372 18.8892 24.6137 18.0551 24.6177 16.8706L24.6574 4.8137C24.6608 3.76636 23.94 3.05373 22.8926 3.05093C22.0323 3.04864 20.9587 3.45724 19.1757 3.45247C14.9115 3.44109 11.5027 1.13779 7.10145 1.12604C5.29354 1.12122 4.2578 1.38029 3.14644 1.88853C2.22238 2.30999 1.69657 2.95694 1.69283 4.09156L1.62476 24.7391C1.62201 25.5745 2.30551 26.2621 3.12842 26.2643ZM4.82208 11.7556L4.83401 8.13972C5.13419 7.85375 5.89591 7.50667 7.18015 7.5101C7.54174 7.51106 8.31461 7.563 8.88787 7.65181L8.89875 4.3477C10.3694 4.55113 11.7519 4.99121 13.1719 5.41893L13.161 8.71057C14.5311 9.16309 16.0884 9.54131 17.4345 9.70701L17.4454 6.40287C17.9689 6.46661 18.5048 6.50545 19.0534 6.50691C20.0135 6.50948 20.8616 6.42446 21.4981 6.2516L21.4873 9.54321C20.9506 9.69141 20.065 9.81379 19.0426 9.81101C18.6685 9.81006 18.1199 9.79611 17.4345 9.70701L17.4225 13.3228C18.1454 13.412 18.7813 13.4261 19.2551 13.4274C20.2152 13.43 20.8887 13.332 21.4753 13.1715L21.4647 16.3634C21.1896 16.6494 20.3904 16.984 19.0937 16.9805C18.5326 16.979 17.9843 16.9153 17.411 16.8264L17.4225 13.3228C15.8896 13.1068 14.5691 12.779 13.1491 12.3264L13.1379 15.7427C11.7926 15.3401 10.3974 14.9499 8.86436 14.7837L8.87594 11.2676C8.40235 11.204 7.90386 11.1279 7.16824 11.1259C5.88399 11.1225 5.12227 11.4696 4.82208 11.7556ZM8.87594 11.2676C10.4338 11.4962 11.6419 11.886 13.1491 12.3264L13.161 8.71057C11.741 8.29532 10.4581 7.88043 8.88787 7.65181L8.87594 11.2676Z" fill="#0A85D1" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_829">
                                        <rect width="26" height="26" fill="white" transform="translate(0.0908203 0.6875)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <br />
                            Product roadmap
                            <br /><br /><br />
                            <span>Get template →</span>
                        </h4>
                        <h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <g clip-path="url(#clip0_1_845)">
                                    <mask id="mask0_1_845" maskUnits="userSpaceOnUse" x="0" y="1" width="26" height="26">
                                        <path d="M21.5508 1.09619H4.34151C2.16907 1.09619 0.407959 2.8573 0.407959 5.02974V22.239C0.407959 24.4114 2.16907 26.1726 4.34151 26.1726H21.5508C23.7232 26.1726 25.4843 24.4114 25.4843 22.239V5.02974C25.4843 2.8573 23.7232 1.09619 21.5508 1.09619Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_1_845)">
                                        <path d="M10.1453 8.35529H15.7378C16.3308 8.35529 16.6775 7.98121 16.6775 7.36082V6.40291C16.6775 5.7734 16.3308 5.40848 15.7378 5.40848H15.0901C15.0079 4.29544 14.0865 3.40137 12.9461 3.40137C11.8057 3.40137 10.8843 4.29544 10.8021 5.40848H10.1453C9.56138 5.40848 9.21469 5.7734 9.21469 6.40291V7.36082C9.21469 7.98121 9.56138 8.35529 10.1453 8.35529ZM12.9461 6.31167C12.4899 6.31167 12.1159 5.9285 12.1159 5.49059C12.1159 5.03443 12.4899 4.66949 12.9461 4.66949C13.4023 4.66949 13.7672 5.03443 13.7672 5.49059C13.7672 5.9285 13.4023 6.31167 12.9461 6.31167ZM8.11077 26.0361H17.7814C19.8068 26.0361 20.9928 24.8409 20.9928 22.7882V9.03041C20.9928 6.99592 19.825 5.7734 17.8362 5.7734H17.6446C17.7266 5.95587 17.7632 6.17483 17.7632 6.40291V7.28783C17.7632 7.56153 17.7266 7.8079 17.6355 8.02687H17.7723C18.4018 8.02687 18.7394 8.42828 18.7394 9.04867V22.7608C18.7394 23.4086 18.3653 23.7917 17.6902 23.7917H8.19289C7.51778 23.7917 7.14376 23.4086 7.14376 22.7608V9.04867C7.14376 8.42828 7.49045 8.02687 8.1199 8.02687H8.25675C8.16556 7.8079 8.12903 7.56153 8.12903 7.28783V6.40291C8.12903 6.17483 8.16556 5.95587 8.23855 5.7734H8.05604C6.0672 5.7734 4.89943 6.99592 4.89943 9.03041V22.7882C4.89943 24.8409 6.08544 26.0361 8.11077 26.0361ZM9.4154 13.7563C9.93546 13.7563 10.346 13.3457 10.346 12.8256C10.346 12.3148 9.93546 11.9042 9.4154 11.9042C8.91366 11.9042 8.49398 12.3239 8.49398 12.8256C8.49398 13.3366 8.91366 13.7563 9.4154 13.7563ZM12.0338 13.6011H16.6319C17.0607 13.6011 17.4074 13.2545 17.4074 12.8256C17.4074 12.406 17.0607 12.0502 16.6319 12.0502H12.0338C11.605 12.0502 11.2583 12.406 11.2583 12.8256C11.2583 13.2545 11.605 13.6011 12.0338 13.6011ZM9.4154 16.9676C9.93546 16.9676 10.346 16.557 10.346 16.037C10.346 15.5262 9.92633 15.1247 9.4154 15.1247C8.90453 15.1247 8.49398 15.5352 8.49398 16.037C8.49398 16.557 8.90453 16.9676 9.4154 16.9676ZM12.0338 16.8217H16.6319C17.0698 16.8217 17.4074 16.475 17.4074 16.037C17.4074 15.6173 17.0607 15.2707 16.6319 15.2707H12.0338C11.605 15.2707 11.2583 15.6173 11.2583 16.037C11.2583 16.475 11.5958 16.8217 12.0338 16.8217ZM9.4154 20.3523C9.93546 20.3523 10.346 19.9509 10.346 19.4308C10.346 18.9108 9.93546 18.5094 9.4154 18.5094C8.91366 18.5094 8.49398 18.92 8.49398 19.4308C8.49398 19.9418 8.91366 20.3523 9.4154 20.3523ZM12.0338 20.2063H16.6319C17.0607 20.2063 17.4074 19.8597 17.4074 19.4308C17.4074 19.0021 17.0607 18.6645 16.6319 18.6645H12.0338C11.605 18.6645 11.2583 19.0021 11.2583 19.4308C11.2583 19.8597 11.605 20.2063 12.0338 20.2063ZM5.27348 41.9448H20.6096C22.6989 41.9448 23.8301 40.8135 23.8301 38.7426V33.5241C23.8301 32.2286 23.6659 31.6812 23.0729 30.9331L20.3268 27.3659C19.159 25.8606 18.5843 25.4135 16.8782 25.4135H9.00485C7.30794 25.4135 6.73321 25.8606 5.5563 27.3659L2.81021 30.9331C2.22632 31.6903 2.05298 32.2286 2.05298 33.5241V38.7426C2.05298 40.8135 3.19338 41.9448 5.27348 41.9448ZM12.9461 35.8414C11.5411 35.8414 10.6836 34.8652 10.6836 33.6883V33.5606C10.6836 33.1226 10.4281 32.703 9.88073 32.703H4.87206C4.48888 32.703 4.43414 32.3928 4.6166 32.1465L7.85533 27.9315C8.19289 27.4936 8.59431 27.2929 9.13263 27.2929H16.7505C17.2888 27.2929 17.6902 27.4936 18.0277 27.9315L21.2574 32.1465C21.449 32.3928 21.3851 32.703 21.011 32.703H16.0024C15.455 32.703 15.1996 33.1226 15.1996 33.5606V33.6883C15.1996 34.8652 14.342 35.8414 12.9461 35.8414Z" fill="#F5A300" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_845">
                                        <rect width="26" height="26" fill="white" transform="translate(0.0908203 0.617676)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <br />
                            Meeting notes
                            <br /><br />
                            <span>Get template →</span>
                        </h4>
                        <h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <path d="M19.5908 5.43262V2.99512H17.1533V5.43262H9.02832V2.99512H6.59082V5.43262H3.34082V21.6826H22.8408V5.43262H19.5908ZM9.02832 19.6514H5.77832V16.8076H9.02832V19.6514ZM9.02832 14.7764H5.77832V11.9326H9.02832V14.7764ZM14.7158 19.6514H11.4658V16.8076H14.7158V19.6514ZM14.7158 14.7764H11.4658V11.9326H14.7158V14.7764ZM20.4033 19.6514H17.1533V16.8076H20.4033V19.6514ZM20.4033 14.7764H17.1533V11.9326H20.4033V14.7764Z" fill="#2A9D99" />
                            </svg>
                            <br />
                            Editorial calendar
                            <br /><br /><br />
                            <span>Get template →</span>
                        </h4>
                    </div>

                    <div>
                        <h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <g clip-path="url(#clip0_1_837)">
                                    <path d="M12.9047 26.3542C19.9031 26.3728 25.6655 20.6326 25.6886 13.6343C25.7117 6.64801 19.9751 0.877096 12.9888 0.858444C5.9904 0.83976 0.227933 6.57997 0.204903 13.5662C0.181834 20.5646 5.91841 26.3355 12.9047 26.3542ZM11.5995 19.6539C11.0565 19.6525 10.635 19.41 10.2505 18.9384L7.42604 15.5523C7.14964 15.2137 7.04204 14.9118 7.04319 14.5619C7.04566 13.8138 7.65091 13.2241 8.38694 13.2261C8.8213 13.2273 9.15863 13.3971 9.48313 13.7841L11.5741 16.3839L16.3045 8.91548C16.62 8.40954 17.0189 8.15721 17.4895 8.15847C18.2135 8.1604 18.8754 8.69308 18.8729 9.44121C18.872 9.74281 18.7502 10.0683 18.532 10.3814L12.9051 18.9335C12.5898 19.3912 12.1184 19.6553 11.5995 19.6539Z" fill="#F8792A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_837">
                                        <rect width="26" height="26" fill="white" transform="translate(0.0908203 0.6875)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <br />
                            OKRs
                            <br /><br /><br />
                            <span>Get template →</span>
                        </h4>
                        <h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <path d="M24.5593 15.2773C24.5537 14.1916 23.079 13.2206 21.1813 13.2155L17.3131 13.2052C16.8022 13.2038 16.6201 13.0938 16.3019 12.7646L10.0381 6.06051C9.82892 5.84098 9.59213 5.73088 9.32756 5.73017L7.97727 5.72656C7.7401 5.72593 7.59342 5.94449 7.71118 6.19114L10.9543 13.1699L6.20855 13.6773L4.52126 10.7534C4.38516 10.5249 4.18478 10.424 3.89284 10.4233L3.46405 10.4221C3.19948 10.4214 3.01641 10.6034 3.01557 10.8588L2.98682 19.5806C2.98598 19.836 3.16784 20.019 3.43241 20.0197L3.8612 20.0208C4.15314 20.0216 4.35422 19.9127 4.49178 19.6941L6.19832 16.7792L10.9406 17.3119L7.65164 24.2641C7.53216 24.5192 7.67745 24.7386 7.91462 24.7392L9.26484 24.7428C9.52941 24.7435 9.76702 24.6347 9.97756 24.4163L16.2855 17.7458C16.6059 17.4091 16.7887 17.3093 17.2996 17.3106L21.1678 17.3209C23.0655 17.326 24.5466 16.3629 24.5593 15.2773Z" fill="#EA4E43" />
                            </svg>
                            <br />
                            Vacation planner
                            <br /><br />
                            <span>Get template →</span>
                        </h4>
                        <h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <path d="M20.6755 3.80762H5.50613L3.34082 16.8076V23.3076H22.8408V16.8076L20.6755 3.80762ZM15.5283 16.8076C15.5283 18.1523 14.4355 19.2451 13.0908 19.2451C11.7461 19.2451 10.6533 18.1523 10.6533 16.8076H5.81082L7.56988 6.24512H18.6077L20.3668 16.8076H15.5243H15.5283Z" fill="#9D34DA" />
                            </svg>
                            <br />
                            Habit tracker
                            <br /><br /><br />
                            <span>Get template →</span>
                        </h4>
                    </div>
                </div>
            </section>
            <section className='getStarted'>
                <h2>Get started for free</h2>
                <p>Play around with it first. Pay and add your team later.</p>
                <div>
                    <button>Try Notion free</button>
                    <a href='temp'>Request a demo →</a>
                </div>
                <img src='/assets/getstarted1.png' alt='invalid' />

            </section>
            <footer>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="31" viewBox="0 0 88 31" fill="none">
                        <g clip-path="url(#clip0_1_889)">
                            <path d="M1.89582 1.41139L18.4958 0.185389C20.5348 0.0103887 21.0588 0.128389 22.3408 1.06039L27.6398 4.79339C28.5138 5.43539 28.8048 5.61039 28.8048 6.30939V26.7824C28.8048 28.0654 28.3388 28.8244 26.7078 28.9404L7.43082 30.1074C6.20682 30.1654 5.62382 29.9904 4.98282 29.1734L1.08082 24.0994C0.38082 23.1654 0.0908203 22.4664 0.0908203 21.6494V3.45139C0.0908203 2.40239 0.55682 1.52739 1.89582 1.41139Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4958 0.185389L1.89582 1.41139C0.55682 1.52739 0.0908203 2.40239 0.0908203 3.45139V21.6494C0.0908203 22.4664 0.38082 23.1654 1.08082 24.0994L4.98282 29.1734C5.62382 29.9904 6.20682 30.1654 7.43082 30.1074L26.7078 28.9404C28.3378 28.8244 28.8048 28.0654 28.8048 26.7824V6.30939C28.8048 5.64639 28.5428 5.45539 27.7718 4.88939C27.7275 4.85743 27.6831 4.82543 27.6388 4.79339L22.3408 1.06039C21.0588 0.128389 20.5348 0.0103887 18.4958 0.185389ZM7.86682 5.97439C6.29282 6.08039 5.93582 6.10439 5.04182 5.37739L2.76882 3.56939C2.53782 3.33539 2.65382 3.04339 3.23582 2.98539L19.1938 1.81939C20.5338 1.70239 21.2318 2.16939 21.7558 2.57739L24.4928 4.56039C24.6098 4.61939 24.9008 4.96839 24.5508 4.96839L8.07082 5.96039L7.86682 5.97439ZM6.03182 26.6074V9.22739C6.03182 8.46839 6.26482 8.11839 6.96282 8.05939L25.8908 6.95139C26.5328 6.89339 26.8228 7.30139 26.8228 8.05939V25.3234C26.8228 26.0824 26.7058 26.7244 25.6578 26.7824L7.54482 27.8324C6.49682 27.8904 6.03182 27.5414 6.03182 26.6074ZM23.9118 10.1594C24.0278 10.6844 23.9118 11.2094 23.3868 11.2694L22.5138 11.4424V24.2744C21.7558 24.6824 21.0578 24.9154 20.4748 24.9154C19.5428 24.9154 19.3098 24.6234 18.6118 23.7494L12.9028 14.7674V23.4574L14.7088 23.8664C14.7088 23.8664 14.7088 24.9164 13.2518 24.9164L9.23482 25.1494C9.11782 24.9154 9.23482 24.3324 9.64182 24.2164L10.6908 23.9254V12.4354L9.23482 12.3174C9.11782 11.7924 9.40882 11.0344 10.2248 10.9754L14.5348 10.6854L20.4748 19.7834V11.7344L18.9608 11.5604C18.8438 10.9174 19.3098 10.4504 19.8918 10.3934L23.9118 10.1594Z" fill="black" />
                            <path d="M41.5247 21.3685V13.4585H41.6618L47.3658 21.3685H49.1618V9.74448H47.1648V17.6465H47.0278L41.3238 9.74448H39.5208V21.3675H41.5258L41.5247 21.3685ZM54.8058 21.5465C57.4408 21.5465 59.0438 19.8225 59.0438 16.9625C59.0438 14.1105 57.4328 12.3785 54.8058 12.3785C52.1878 12.3785 50.5688 14.1185 50.5688 16.9625C50.5688 19.8225 52.1638 21.5465 54.8058 21.5465ZM54.8058 19.8705C53.4128 19.8705 52.6158 18.8075 52.6158 16.9625C52.6158 15.1255 53.4128 14.0545 54.8058 14.0545C56.1918 14.0545 56.9888 15.1255 56.9888 16.9625C56.9888 18.8075 56.1998 19.8705 54.8058 19.8705ZM60.8688 10.3975V12.6125H59.4757V14.2075H60.8688V19.0165C60.8688 20.7245 61.6748 21.4095 63.6968 21.4095C64.0828 21.4095 64.4538 21.3695 64.7438 21.3125V19.7495C64.5018 19.7735 64.3488 19.7895 64.0668 19.7895C63.2298 19.7895 62.8588 19.4035 62.8588 18.5335V14.2075H64.7438V12.6125H62.8588V10.3965L60.8688 10.3975ZM65.9408 21.3685H67.9307V12.5555H65.9408V21.3685ZM66.9318 11.0985C67.5918 11.0985 68.1237 10.5655 68.1237 9.89748C68.1237 9.22848 67.5928 8.68848 66.9318 8.68848C66.2798 8.68848 65.7398 9.22848 65.7398 9.89748C65.7398 10.5655 66.2798 11.0975 66.9318 11.0975V11.0985ZM73.3898 21.5465C76.0238 21.5465 77.6268 19.8225 77.6268 16.9625C77.6268 14.1105 76.0158 12.3785 73.3898 12.3785C70.7708 12.3785 69.1517 14.1185 69.1517 16.9625C69.1517 19.8225 70.7468 21.5465 73.3898 21.5465ZM73.3898 19.8705C71.9958 19.8705 71.1978 18.8075 71.1978 16.9625C71.1978 15.1255 71.9958 14.0545 73.3898 14.0545C74.7748 14.0545 75.5728 15.1255 75.5728 16.9625C75.5728 18.8075 74.7828 19.8705 73.3898 19.8705ZM78.8158 21.3685H80.8138V16.2375C80.8138 14.9405 81.5638 14.1185 82.7548 14.1185C83.9718 14.1185 84.5348 14.7955 84.5348 16.1405V21.3685H86.5338V15.6655C86.5338 13.5625 85.4618 12.3785 83.4967 12.3785C82.1828 12.3785 81.2968 12.9825 80.8778 13.9655H80.7408V12.5555H78.8158V21.3685Z" fill="#121212" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_889">
                                <rect width="87" height="30" fill="white" transform="translate(0.0908203 0.117188)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <g clip-path="url(#clip0_1_896)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.09082 1.73819C11.4958 1.73819 11.7798 1.74919 12.7258 1.79119C13.6048 1.83019 14.0798 1.97719 14.3958 2.10019C14.8138 2.26219 15.1168 2.45919 15.4298 2.77119C15.7458 3.08719 15.9398 3.38619 16.1048 3.80519C16.2278 4.12119 16.3758 4.60019 16.4138 5.47519C16.4558 6.42419 16.4668 6.70919 16.4668 9.11019C16.4668 11.5112 16.4558 11.7992 16.4138 12.7452C16.3748 13.6242 16.2278 14.0992 16.1048 14.4152C15.9607 14.8054 15.7315 15.1586 15.4338 15.4492C15.1178 15.7652 14.8188 15.9592 14.3998 16.1242C14.0838 16.2472 13.6048 16.3952 12.7298 16.4332C11.7808 16.4752 11.4958 16.4862 9.09482 16.4862C6.69382 16.4862 6.40582 16.4752 5.45982 16.4332C4.58082 16.3942 4.10582 16.2472 3.78982 16.1242C3.39962 15.98 3.04641 15.7508 2.75582 15.4532C2.45707 15.1627 2.22652 14.8096 2.08082 14.4192C1.95782 14.1032 1.80982 13.6242 1.77182 12.7492C1.72982 11.8002 1.71882 11.5152 1.71882 9.11419C1.71882 6.71319 1.72982 6.42519 1.77182 5.47919C1.81082 4.60019 1.95782 4.12519 2.08082 3.80919C2.24282 3.39119 2.43982 3.08819 2.75182 2.77519C3.06782 2.45919 3.36682 2.26519 3.78582 2.10019C4.10182 1.97719 4.58082 1.82919 5.45582 1.79119C6.40182 1.74919 6.68582 1.73819 9.09082 1.73819ZM9.09082 0.117188C6.64782 0.117188 6.34182 0.128187 5.38182 0.170187C4.42582 0.212187 3.76782 0.367187 3.19882 0.588187C2.59701 0.814123 2.05217 1.1695 1.60282 1.62919C1.14387 2.07798 0.788579 2.62167 0.56182 3.22219C0.34082 3.79519 0.18582 4.44919 0.14382 5.40519C0.10182 6.36819 0.0908203 6.67419 0.0908203 9.11719C0.0908203 11.5602 0.10182 11.8662 0.14382 12.8262C0.18582 13.7822 0.34082 14.4402 0.56182 15.0092C0.787755 15.611 1.14313 16.1558 1.60282 16.6052C2.05176 17.063 2.59549 17.4169 3.19582 17.6422C3.76882 17.8632 4.42282 18.0182 5.37882 18.0602C6.33882 18.1022 6.64482 18.1132 9.08782 18.1132C11.5308 18.1132 11.8368 18.1022 12.7968 18.0602C13.7528 18.0182 14.4108 17.8632 14.9798 17.6422C15.5798 17.4163 16.1235 17.0625 16.5728 16.6052C17.0728 16.1062 17.3818 15.6032 17.6098 15.0122C17.8308 14.4392 17.9858 13.7852 18.0278 12.8292C18.0698 11.8692 18.0808 11.5632 18.0808 9.12019C18.0808 6.67719 18.0698 6.37119 18.0278 5.41119C17.9858 4.45519 17.8308 3.79719 17.6098 3.22819C17.3931 2.62324 17.0408 2.07592 16.5798 1.62819C16.1309 1.17038 15.5872 0.816428 14.9868 0.591188C14.4138 0.370188 13.7598 0.215188 12.8038 0.173188C11.8408 0.127188 11.5348 0.117188 9.09082 0.117188ZM9.09082 4.49419C7.86489 4.49472 6.68932 4.98195 5.82245 5.84882C4.95559 6.71568 4.46835 7.89125 4.46782 9.11719C4.46835 10.3431 4.95559 11.5187 5.82245 12.3856C6.68932 13.2524 7.86489 13.7397 9.09082 13.7402C10.3168 13.7397 11.4923 13.2524 12.3592 12.3856C13.2261 11.5187 13.7133 10.3431 13.7138 9.11719C13.7133 7.89125 13.2261 6.71568 12.3592 5.84882C11.4923 4.98195 10.3168 4.49472 9.09082 4.49419ZM9.09082 12.1162C8.69231 12.1235 8.29635 12.0513 7.92606 11.9038C7.55577 11.7563 7.21858 11.5365 6.93418 11.2573C6.64979 10.978 6.42389 10.6449 6.26968 10.2774C6.11547 9.90984 6.03605 9.51526 6.03605 9.11669C6.03605 8.71811 6.11547 8.32353 6.26968 7.956C6.42389 7.58846 6.64979 7.25534 6.93418 6.97609C7.21858 6.69684 7.55577 6.47706 7.92606 6.32959C8.29635 6.18212 8.69231 6.10991 9.09082 6.11719C9.88647 6.11719 10.6495 6.43326 11.2121 6.99587C11.7747 7.55848 12.0908 8.32154 12.0908 9.11719C12.0908 9.91284 11.7747 10.6759 11.2121 11.2385C10.6495 11.8011 9.88647 12.1172 9.09082 12.1172V12.1162ZM13.8968 5.39019C14.183 5.39019 14.4574 5.27651 14.6598 5.07416C14.8621 4.8718 14.9758 4.59736 14.9758 4.31119C14.9758 4.02502 14.8621 3.75057 14.6598 3.54822C14.4574 3.34587 14.183 3.23219 13.8968 3.23219C13.6107 3.23219 13.3362 3.34587 13.1339 3.54822C12.9315 3.75057 12.8178 4.02502 12.8178 4.31119C12.8178 4.59736 12.9315 4.8718 13.1339 5.07416C13.3362 5.27651 13.6107 5.39019 13.8968 5.39019Z" fill="black" fill-opacity="0.6" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_896">
                                    <rect width="18" height="18" fill="white" transform="translate(0.0908203 0.117188)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17" fill="none">
                            <g clip-path="url(#clip0_1_899)">
                                <path d="M19.8685 2.00873C19.1501 2.33241 18.3754 2.54777 17.5664 2.64377C18.3949 2.14411 19.0291 1.35155 19.3309 0.408858C18.5562 0.87036 17.696 1.2088 16.7845 1.3897C16.0513 0.604535 15.009 0.117188 13.8555 0.117188C11.6402 0.117188 9.84641 1.92505 9.84641 4.15503C9.84641 4.47009 9.88063 4.77776 9.94899 5.07434C6.61564 4.90451 3.65982 3.29725 1.68154 0.8519C1.33818 1.44754 1.139 2.14411 1.139 2.88251C1.139 4.28302 1.84527 5.52108 2.92178 6.24349C2.26439 6.22379 1.6461 6.0392 1.10357 5.74014V5.7906C1.10357 7.7486 2.48556 9.38297 4.3221 9.75212C3.98607 9.84448 3.63049 9.89488 3.26391 9.89488C3.00487 9.89488 2.7556 9.86785 2.50755 9.82225C3.01953 11.4259 4.5005 12.595 6.25395 12.6295C4.87929 13.7137 3.15272 14.3598 1.27097 14.3598C0.945941 14.3598 0.629465 14.3401 0.312988 14.302C2.0921 15.4514 4.1999 16.1172 6.46412 16.1172C13.8408 16.1172 17.8781 9.96012 17.8781 4.62145C17.8781 4.44424 17.8744 4.27194 17.867 4.09842C18.6503 3.53354 19.3297 2.82098 19.8673 2.00996L19.8685 2.00873Z" fill="black" fill-opacity="0.6" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_899">
                                    <rect width="20" height="16" fill="white" transform="translate(0.0908203 0.117188)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                            <g clip-path="url(#clip0_1_902)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.16772 4.27098C3.31416 4.27098 4.24461 3.34053 4.24461 2.19409C4.24461 1.04764 3.31416 0.117188 2.16772 0.117188C1.02127 0.117188 0.0908203 1.04764 0.0908203 2.19409C0.0908203 3.34053 1.02127 4.27098 2.16772 4.27098ZM0.0908203 18.1172V5.65576H4.24461V18.1172H0.0908203ZM7.01453 5.65576H10.8457V7.61912H10.9011C11.4341 6.66237 12.7384 5.65576 14.6838 5.65576C18.7282 5.65576 19.4759 8.17296 19.4759 11.4475V18.1172H15.4813V12.2049C15.4813 10.7954 15.4522 8.98018 13.4044 8.98018C11.3248 8.98018 11.0063 10.5157 11.0063 12.1025V18.1172H7.01453V5.65576Z" fill="black" fill-opacity="0.6" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_902">
                                    <rect width="20" height="18" fill="white" transform="translate(0.0908203 0.117188)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <g clip-path="url(#clip0_1_905)">
                                <path d="M18.0898 9.11619C18.0898 4.14619 14.0608 0.117188 9.0908 0.117188C4.1208 0.117188 0.0917969 4.14619 0.0917969 9.11619C0.0917969 13.6082 3.3828 17.3312 7.6848 18.0062V11.7172H5.3998V9.11619H7.6848V7.13319C7.6848 4.87819 9.0288 3.63219 11.0838 3.63219C12.0688 3.63219 13.0988 3.80819 13.0988 3.80819V6.02319H11.9638C10.8458 6.02319 10.4968 6.71719 10.4968 7.42819V9.11619H12.9928L12.5938 11.7172H10.4968V18.0062C14.7988 17.3312 18.0898 13.6082 18.0898 9.11619Z" fill="black" fill-opacity="0.6" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_905">
                                    <rect width="18" height="18" fill="white" transform="translate(0.0908203 0.117188)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <g clip-path="url(#clip0_1_908)">
                                <path d="M9.09082 2.1875C0.24582 2.1875 0.0908203 2.9745 0.0908203 9.1175C0.0908203 15.2605 0.24582 16.0475 9.09082 16.0475C17.9358 16.0475 18.0908 15.2605 18.0908 9.1175C18.0908 2.9745 17.9358 2.1875 9.09082 2.1875ZM11.9748 9.4185L7.93382 11.3045C7.57982 11.4685 7.28982 11.2845 7.28982 10.8945V7.3415C7.28982 6.9515 7.57982 6.7675 7.93382 6.9315L11.9748 8.8175C12.3288 8.9835 12.3288 9.2535 11.9748 9.4185Z" fill="black" fill-opacity="0.6" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_908">
                                    <rect width="18" height="18" fill="white" transform="translate(0.0908203 0.117188)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <g clip-path="url(#clip0_1_912)">
                                <path d="M8.22796 14.7714C12.0114 14.7714 15.1453 11.6441 15.1453 7.85393C15.1453 4.07045 12.0114 0.936523 8.22127 0.936523C4.43778 0.936523 1.31055 4.07045 1.31055 7.85393C1.31055 11.6441 4.44448 14.7714 8.22796 14.7714ZM4.19671 3.64188C4.86635 3.00572 5.67662 2.51688 6.58064 2.24902C6.10519 2.72447 5.7034 3.39412 5.40207 4.21108C4.93331 4.06375 4.53153 3.86956 4.19671 3.64188ZM9.88198 2.25572C10.7793 2.52358 11.5896 3.00572 12.2525 3.64188C11.9244 3.87625 11.5226 4.06375 11.0539 4.21777C10.7525 3.39412 10.3507 2.72447 9.88198 2.25572ZM8.69671 2.47C9.25251 2.73786 9.76144 3.46108 10.1231 4.44545C9.68108 4.52581 9.20563 4.57269 8.69671 4.59278V2.47ZM6.33287 4.44545C6.70118 3.46108 7.2034 2.73786 7.75921 2.47V4.59278C7.25028 4.57269 6.77483 4.52581 6.33287 4.44545ZM2.40207 7.38519C2.49582 6.24679 2.92439 5.19545 3.58064 4.33161C3.98912 4.63295 4.51814 4.89412 5.1342 5.08831C4.9601 5.78473 4.84626 6.56152 4.81278 7.38519H2.40207ZM11.6432 7.38519C11.6097 6.56152 11.4958 5.78473 11.3217 5.08831C11.9378 4.89412 12.4668 4.63965 12.8685 4.33161C13.5315 5.19545 13.9601 6.24679 14.0539 7.38519H11.6432ZM5.77036 7.38519C5.80385 6.65527 5.9043 5.95885 6.05832 5.32938C6.59403 5.43653 7.16322 5.50349 7.75921 5.53028V7.38519H5.77036ZM8.69671 7.38519V5.53028C9.2927 5.50349 9.86188 5.43653 10.3976 5.32938C10.5516 5.95885 10.6521 6.65527 10.6856 7.38519H8.69671ZM2.40207 8.32269H4.81278C4.84626 9.15974 4.9601 9.94322 5.1342 10.6463C4.52483 10.8405 4.00251 11.095 3.60073 11.3963C2.93108 10.5258 2.49582 9.46777 2.40207 8.32269ZM5.77036 8.32269H7.75921V10.2111C7.16992 10.2379 6.59403 10.3048 6.06502 10.4053C5.9043 9.76911 5.79715 9.05929 5.77036 8.32269ZM8.69671 10.2111V8.32269H10.6856C10.6588 9.05929 10.5516 9.76911 10.3909 10.4053C9.86189 10.3048 9.2927 10.2379 8.69671 10.2111ZM11.3217 10.6463C11.5025 9.94322 11.6097 9.15974 11.6432 8.32269H14.0539C13.9601 9.46777 13.5249 10.5258 12.8552 11.3963C12.4535 11.095 11.9311 10.8405 11.3217 10.6463ZM8.69671 11.1486C9.19894 11.1687 9.67439 11.2155 10.1097 11.2959C9.74804 12.2602 9.24582 12.9768 8.69671 13.2379V11.1486ZM6.34626 11.2959C6.78153 11.2155 7.25698 11.1687 7.75921 11.1486V13.2379C7.2101 12.9768 6.70787 12.2602 6.34626 11.2959ZM4.2168 12.0861C4.54492 11.8584 4.94671 11.6709 5.40876 11.5236C5.7101 12.3272 6.10519 12.9834 6.56724 13.4522C5.68331 13.1843 4.87975 12.7089 4.2168 12.0861ZM11.0472 11.5236C11.5092 11.6709 11.911 11.8584 12.2392 12.0861C11.5762 12.7089 10.7726 13.1843 9.88867 13.4522C10.3507 12.9834 10.7458 12.3272 11.0472 11.5236Z" fill="#121212" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_912">
                                    <rect width="16" height="16" fill="white" transform="translate(0.0908203 0.117188)" />
                                </clipPath>
                            </defs>
                        </svg>
                        English
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
                            <g clip-path="url(#clip0_1_915)">
                                <path d="M1.40088 1.11719L4.40088 4.11719L7.40088 1.11719" stroke="#121212" stroke-width="1.5" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_915">
                                    <rect width="8" height="6" fill="white" transform="translate(0.400879 0.117188)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
                <div className='getStartedBox'>
                    <h6>Product</h6>
                    <p>Wikis</p>
                    <p>Projects</p>
                    <p>Docs</p>
                    <p>Notion AI</p>
                    <p>What’s new</p>
                    <br /><br />
                    <h6>Solutions</h6>
                    <p>Enterprise</p>
                    <p>Small business</p>
                    <p>Personal use</p>
                    <p>Remote work</p>
                    <p>Startups</p>
                    <p>Education</p>
                    <p>Nonprofits</p>
                    <p>Engineering</p>
                    <p>Product</p>
                    <p>Design</p>
                    <p>Managers</p>

                    <h5>Do Not Sell or Share My Info <span>© 2023 Notion Labs, Inc.</span></h5>

                </div>
                <div className='getStartedBox'>
                    <h6>Download</h6>
                    <p>iOS & Android</p>
                    <p>Mac & Windows</p>
                    <p>Web Clipper</p>

                    <br /><br />

                    <h6>Build</h6>
                    <p>Integrations</p>
                    <p>Templates</p>
                    <p>API docs</p>
                    <p>Guides & tutorials</p>
                    <p>Hire a consultant</p>
                    <p>Become an affiliate</p>

                    <br /><br />
                    <h6>Learn</h6>
                    <p>Customer stories</p>
                    <p>Help center</p>
                    <p>Webinars</p>
                    <p>Blog</p>
                    <p>Community</p>


                </div>
                <div className='getStartedBox'>
                    <h6>Get started</h6>
                    <p>Switch from Confluence</p>
                    <p>Switch from Asana</p>
                    <p>Switch from Evernote</p>
                    <p>Compare vs Monday</p>
                    <p>Compare vs Clickup</p>
                    <p>Compare vs Jira</p>
                    <br /><br />
                    <h6>Resources</h6>
                    <p>Pricing</p>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Media kit</p>
                    <p>Email us</p>
                    <p>Security</p>
                    <p>Cookie settings</p>
                    <p>Terms & privacy</p>
                    <p>California Privacy Notice</p>
                    <p>Status</p>

                </div>

            </footer>
        </div>
    )
}

export default Hero