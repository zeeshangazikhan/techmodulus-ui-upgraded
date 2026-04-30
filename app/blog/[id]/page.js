'use client'

import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import StickyHeader from "@/components/layout/StickyHeader"
import Footer4 from "@/components/layout/footer/Footer4"
import data from "@/util/blog.json"

const BlogDetails = () => {

    const params = useParams()
    const { id } = params

    const [blogPost, setBlogPost] = useState(null)

    useEffect(() => {
        setBlogPost(data.find((d) => d.id == id))
    }, [id])


    return (
        <>
            <StickyHeader scroll={true} />
            <div id="wrapper_full" className="content_all_warpper">
                <div id="content" className="site-content">
                    {/* Breadcrumb Section */}
                    <section className="page-title-section" style={{
                        background: 'linear-gradient(135deg, #008BF9 0%, #0066cc 100%)',
                        padding: '80px 0 60px',
                        marginTop: '80px'
                    }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h1 style={{ color: '#fff', fontSize: '42px', fontWeight: '700', marginBottom: '15px' }}>Blog Details</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center" style={{ background: 'transparent', marginBottom: 0 }}>
                                            <li className="breadcrumb-item"><Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }}>Home</Link></li>
                                            <li className="breadcrumb-item"><Link href="/blog" style={{ color: 'rgba(255,255,255,0.8)' }}>Blog</Link></li>
                                            <li className="breadcrumb-item active" style={{ color: '#fff' }}>Details</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </section>

                {blogPost && (
                    <>

                        <section className="blog-detail-section">
                            {/*-============spacing==========-*/}
                            <div className="pd_top_90" />
                            {/*-============spacing==========-*/}
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="blog_single_content">
                                            <div className="single-thumbnail">
                                                <img src={`/assets/images/blog/${blogPost.img}`} className="img-fluid" alt="img" />
                                            </div>
                                            <div className="single_content_upper">
                                                <div className="post_single_content">
                                                    <div className="section_title small type_one mr_bottom_25">
                                                        <div className="title_whole">
                                                            <h3 className="title"> "Touch Design For Mobile Interfaces" A News Smashing BookCreate An Information Wayaea Architecture Easy</h3>
                                                        </div>
                                                    </div>
                                                    <div className="position-relative position_p_relative mr_bottom_20"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim epsam voluptatem quia voluptas sit aspernatur aut odit aut fugiconse quuntur magni dolores qui ratione voluptatem sequi nesciunt.</div>
                                                    <div className="row mr_bottom_20">
                                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                                            <div className="position-relative">
                                                                <ul className="list_box list">
                                                                    <li>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="icon trans">
                                                                                <i aria-hidden="false" className="fas fa-check-circle" />
                                                                            </div>
                                                                            <Link className="links" href="#"> Best Insurance Agency </Link>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="icon trans">
                                                                                <i aria-hidden="false" className="fas fa-check-circle" />
                                                                            </div>
                                                                            <Link className="links" href="#"> Trusted &amp; Experience Insurance </Link>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="icon trans">
                                                                                <i aria-hidden="false" className="fas fa-check-circle" />
                                                                            </div>
                                                                            <Link className="links" href="#"> Dedicated Support &amp; Security </Link>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                                            <div className="position-relative">
                                                                <ul className="list_box list">
                                                                    <li>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="icon trans">
                                                                                <i aria-hidden="false" className="fas fa-check-circle" />
                                                                            </div>
                                                                            <Link className="links" href="#"> Best Insurance Agency </Link>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="icon trans">
                                                                                <i aria-hidden="false" className="fas fa-check-circle" />
                                                                            </div>
                                                                            <Link className="links" href="#"> Trusted &amp; Experience Insurance </Link>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="icon trans">
                                                                                <i aria-hidden="false" className="fas fa-check-circle" />
                                                                            </div>
                                                                            <Link className="links" href="#"> Dedicated Support &amp; Security </Link>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                                            <div className="position-relative">
                                                                <ul className="list_box list">
                                                                    <li>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="icon trans">
                                                                                <i aria-hidden="false" className="fas fa-check-circle" />
                                                                            </div>
                                                                            <Link className="links" href="#"> Best Insurance Agency </Link>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="icon trans">
                                                                                <i aria-hidden="false" className="fas fa-check-circle" />
                                                                            </div>
                                                                            <Link className="links" href="#"> Trusted &amp; Experience Insurance </Link>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="icon trans">
                                                                                <i aria-hidden="false" className="fas fa-check-circle" />
                                                                            </div>
                                                                            <Link className="links" href="#"> Dedicated Support &amp; Security </Link>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="quote_box_one mr_bottom_20">
                                                        <div className="section_title type_one">
                                                            <div className="title_whole">
                                                                <h4 className="title"> Building Gatsby Custom Range Input That Looks Consistent Across All Browsers</h4>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="img">
                                                                <img src="/assets/images/testimonial/test-1-min.png" className="img-fluid" alt="img" />
                                                            </div>
                                                            <div className="section_title type_one">
                                                                <div className="title_whole">
                                                                    <h5 className="title"> Sam S. Guerrero</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="position-relative position_p_relative mr_bottom_20"> Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim epsam voluptatem quia voluptas sit aspernature </div>
                                                    <div className="clearfix" />
                                                </div>
                                                <div className="single_content_lower">
                                                    <div className="tags_and_cat yes_tags yes_share">
                                                        <div className="d-flex">
                                                            <div className="left_one d-flex">
                                                                <div className="title">Tags</div>
                                                                <Link className="tags" href="/blog-details-left-sidebar"># Health</Link>
                                                                <Link className="tags" href="/blog-details-left-sidebar"># Insurance</Link>
                                                                <Link className="tags" href="/blog-details-left-sidebar"># Medical</Link>
                                                            </div>
                                                            <div className="right_one d-flex">
                                                                <div className="title">Posted in</div>
                                                                <Link className="cats" href="/blog-details-left-sidebar"> Business Insurance</Link>
                                                                <Link className="cats" href="/blog-details-left-sidebar"> Life Insurance</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="same_authour">
                                                        <div className="image">
                                                            <img src="/assets/images/gavatar.png" alt="gavatar" className="img-fluid" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title_no_a_22"> Bradley R Grady</h4>
                                                            <p> Insuring A Better World Fund pays for everything. Unlock the huge charitable value of unneeded life insurance with no administrative or premium costs. </p>
                                                        </div>
                                                    </div>
                                                    <div className="sec_comments comment-form" id="comment">
                                                        <div className="container_no">
                                                            <div className="row justify-content-center">
                                                                <div className="col-lg-12">
                                                                    <div id="respond" className="comment-respond">
                                                                        <h3 id="reply-title" className="comment-reply-title">Post a comment</h3>
                                                                        <form action="#" method="post" id="commentform" className="comment-form">
                                                                            <p className="title_para">Your email address will not be published. </p>
                                                                            <p className="comment-form-comment">
                                                                                <label>Leave a Reply</label>
                                                                                <textarea placeholder="Write your comment here..." id="commenttextarea" name="comment" rows={12} aria-required="true" />
                                                                            </p>
                                                                            <p className="comment-form-author">
                                                                                <label>Full Name</label>
                                                                                <input id="author" placeholder="ex. John Doe" name="author" type="text" size={30} aria-required="true" />
                                                                            </p>
                                                                            <p className="comment-form-email">
                                                                                <label>Email address</label>
                                                                                <input id="email" placeholder="ex. john@mail.com" name="email" type="text" size={30} aria-required="true" />
                                                                            </p>
                                                                            <p className="comment-form-url">
                                                                                <label>Website Url</label>
                                                                                <input id="url" name="url" placeholder="ex. www.example.com" type="text" size={30} />
                                                                            </p>
                                                                            <p>
                                                                                <input name="submit" type="submit" id="submit" className="submit" value="Post comment" />
                                                                            </p>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_70" />
                            {/*-============spacing==========-*/}
                        </section>

                    </>
                )}
            </div>
            </div>
            <Footer4 />
        </>
    )
}

export default BlogDetails
