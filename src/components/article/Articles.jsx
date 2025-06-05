import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "../ui/button";

const articles = [
  {
    title: "Purity In Christ",
    summary: "Being Pure in Christ",
    content: ` "Blessed are the pure in heart, for they shall see God." Matthew 5:8 (ESV)

In a culture filled with noise, temptation, and compromise, purity can feel like an outdated concept. But in Christ, purity isn't just about avoiding sin—it's about being transformed from the inside out.

Purity in Christ begins with the heart. It's not merely about external actions, but about an inward surrender to God. David prayed, "Create in me a clean heart, O God, and renew a right spirit within me" (Psalm 51:10). That same prayer should be ours daily. When we come to Jesus, He washes us clean—not just from past mistakes, but from the power of sin that seeks to pull us away from God.

Through the cross, Christ makes us pure. “Though your sins are like scarlet, they shall be as white as snow” (Isaiah 1:18). Our purity is not self-earned; it is gifted to us through grace. But once we've received it, we’re called to live it out—to walk in holiness, integrity, and truth.

Purity isn’t about perfection—it’s about pursuit. Pursuing Christ, pursuing His Word, and letting His Spirit guide our thoughts, desires, and actions. Paul urges in 2 Timothy 2:22, “Flee the evil desires of youth and pursue righteousness, faith, love and peace.” It’s a daily choice to say yes to Jesus and no to the things that cloud our hearts.

And the reward? Jesus said the pure in heart “shall see God.” That means intimacy with Him now and forever. There is nothing more satisfying, more fulfilling, or more beautiful than living with a heart fully devoted to Christ.

Purity in Christ is possible. It is powerful. And it is worth it.`,
  },
];

const Articles = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedArticle(null);
  };

  return (
    <section id="articles" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Articles
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-amber-50 p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
              onClick={() => openModal(article)}
            >
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                {article.title}
              </h4>
              <p className="text-gray-600">{article.summary}</p>
              <p className="text-sm text-blue-700 mt-4 underline">Read more</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-30" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold text-gray-900 mb-4"
                    >
                      {selectedArticle?.title}
                    </Dialog.Title>
                    <Dialog.Description className="text-gray-700 whitespace-pre-line max-h-[60vh] overflow-y-auto">
                      {selectedArticle?.content}
                    </Dialog.Description>
                    <div className="mt-6 text-right">
                      <Button onClick={closeModal}>Close</Button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </section>
  );
};

export default Articles;
